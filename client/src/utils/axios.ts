import axios from "axios";
import { ENTRYPOINT } from "../config/entrypoint";
import { setSession } from "./jwt";
import { SupportedLanguagesEnum } from "./i18n";

const axiosInstance = axios.create({ baseURL: ENTRYPOINT });

// Add axios defaults.
axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.headers.common["Accept"] = "application/ld+json";
axiosInstance.defaults.headers.common["Content-Type"] = "application/ld+json";
axiosInstance.defaults.headers.patch["Content-Type"] =
  "application/merge-patch+json";
axiosInstance.defaults.headers.common["Accept-User-Type"] = "user";
axiosInstance.defaults.headers.common["Accept-Language"] =
  localStorage.getItem("i18nextLng") || SupportedLanguagesEnum.EN;

// Add a response interceptor to try to refresh token if it is expired and rerun query.
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const {
      config,
      response: { status, data },
    } = err;

    const originalRequest = config;
    // Do not intercept for login and refresh token links or 404 errors.
    if (
      originalRequest.url.includes("/token/authentication") ||
      originalRequest.url.includes("/token/refresh") ||
      status === 404
    ) {
      return Promise.reject(err);
    }

    // Logout user if token is missing.
    if (
      status === 401 &&
      data.message !== "Expired JWT Token" &&
      !(
        originalRequest.url.includes("/me") &&
        data.message === "JWT Token not found"
      )
    ) {
      window.localStorage.setItem("app-logout", Date.now().toString());
      setSession(null);
      return Promise.reject(err);
    }

    // Try to refresh token if it is expired.
    if (
      status === 401 &&
      (data.message === "Expired JWT Token" ||
        (originalRequest.url.includes("/me") &&
          data.message === "JWT Token not found")) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      // Call for refresh token.
      return axiosInstance
        .post("/token/refresh")
        .then(({ data, status }) => {
          if (status === 200 || status === 204) {
            setSession(data.token);
            originalRequest.headers["Authorization"] = `Bearer ${data.token}`;

            // Return to original request.
            return axiosInstance(originalRequest);
          }
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
