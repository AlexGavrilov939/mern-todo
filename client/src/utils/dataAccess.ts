import { AxiosRequestConfig } from "axios";
import get from "lodash/get";
import has from "lodash/has";
import mapValues from "lodash/mapValues";
import axios from "./axios";
import i18n from "./i18n";
import ViolationError from "./violationError";
import ContextError from "./contextError";

interface Violation {
  message: string;
  propertyPath: string;
  parameters?: { [x: string]: any };
  payload?: { [x: string]: any };
}

export const fetch = async (config: AxiosRequestConfig<any> = {}) => {
  const resp = await axios(config).catch((error) => {
    if (error.response) {
      let defaultErrorMsg = error.response.data["hydra:title"];
      const status =
        error.response.data["hydra:description"] || error.response.statusText;

      // TODO: Find a better way to handle these errors.
      // Override default message.
      if (
        status === 'User is from type "admin", other expected.' ||
        status === "User is blocked." ||
        (error.response.data.code === 401 &&
          error.response.data.message === "Invalid credentials.")
      ) {
        defaultErrorMsg = "error.user.invalidCredentials";
      } else if (status === "User's email address is not verified.") {
        defaultErrorMsg = "error.user.email_not_verified";
      }
      if (error.response.data.trace && status === "Email already registered.") {
        defaultErrorMsg = "error.user.email.in_use";
        throw new ContextError(defaultErrorMsg, status);
      }

      if (!error.response.data.violations) throw Error(defaultErrorMsg);

      const fields: { [x: string]: string } = {};
      const payload: { [x: string]: any } = {};
      error.response.data.violations.map(
        (violation: Violation) =>
          (fields[violation.propertyPath] = violation.message),
      );
      error.response.data.violations.map(
        (violation: Violation) =>
          (payload[violation.propertyPath] = violation.payload),
      );

      error.response.data.violations.map(
        (violation: Violation) => (defaultErrorMsg = violation.message),
      );

      throw new ViolationError(defaultErrorMsg, status, fields, payload);
    } else if (error.request) {
      throw new Error(
        error.request.data["hydra:description"] ||
          error.request.data["hydra:title"] ||
          i18n.t("error.unexpected"),
      );
    } else {
      throw new Error(i18n.t("error.unexpected"));
    }
  });

  return {
    data: resp.data,
    status: resp.status,
  };
};

// Normalize entities to remove the whole entity from returned state and instead return only the @id.
export const normalize = (data: any) => {
  if (has(data, "hydra:member")) {
    // Normalize items in collections
    data["hydra:member"] = data["hydra:member"].map((item: any) =>
      normalize(item),
    );

    return data;
  }

  // Flatten nested documents.
  return mapValues(data, (value) => {
    return Array.isArray(value)
      ? value.map((v) => (excludeFromNormalize(v) ? v : get(v, "@id", v)))
      : excludeFromNormalize(value)
        ? value
        : get(value, "@id", value);
  });
};

// Exclude some of the entities from normalization.
const excludeFromNormalize = (value: any) => {
  return !!(
    value?.["@type"] &&
    [
      "KycKybDocuments",
      "BankAccountDetails",
      "OfferDocument",
      "PrivateFile",
      "ApiToken",
    ].includes(value["@type"])
  );
};
