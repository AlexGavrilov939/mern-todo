import { Alert, Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { LoginCredentials } from "../../types/LoginCredentials";
import ViolationError from "../../utils/violationError";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { fetch } from "../../utils/dataAccess";
import * as Yup from "yup";

interface stateType {
  status?: {
    isValid?: boolean;
    msg?: string;
  };
}

const LoginForm = () => {
  // const { login } = useAuth();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useLocalStorage<stateType>("state", {});
  const [warning, setWarning] = useState<string | null>(null);

  // Clear route state on reload of page.
  useEffect(() => {
    navigate(location.pathname, {});
    setState({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Formik
      initialStatus={state?.status || undefined}
      initialValues={
        {
          email: "",
          password: "",
          recaptcha: "",
        } as LoginCredentials
      }
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .trim()
          .email(t("error.user.email.invalid"))
          .required(t("error.user.email.required")),
        password: Yup.string()
          .trim()
          .required(t("error.user.password.required")),
        recaptcha: Yup.string()
          .nullable()
          .required(t("error.user.recaptcha.required")),
      })}
      onSubmit={(values, { setStatus, setErrors, setSubmitting }) => {
        setWarning(null);
      }}
    >
      {({ isSubmitting, isValid, status }) => (
        <Form>
          <Field
            autoComplete="email"
            id="field-email"
            type="email"
            name="email"
            variant="standard"
            component={TextField}
            label={t("fields.email_address")}
            fullWidth
            disabled={isSubmitting}
            sx={{ mb: 4 }}
          />

          <Field
            autoComplete="current-password"
            id="field-password"
            type="password"
            name="password"
            variant="standard"
            component={TextField}
            label={t("fields.password")}
            fullWidth
            disabled={isSubmitting}
          />
          <Typography
            variant="body2"
            sx={{ mt: 4, mb: 2, color: "text.secondary" }}
          >
            {t("fields.choose_country")}
          </Typography>

          {status && (
            <Alert
              severity={status.type ?? status.isValid ? "success" : "error"}
              variant="outlined"
              sx={{ mt: 4 }}
            >
              {status.msg}
            </Alert>
          )}
          {warning && (
            <Alert severity={"warning"} variant="outlined" sx={{ mt: 4 }}>
              {warning}
            </Alert>
          )}

          <Button
            id="login-button"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={isSubmitting || !isValid}
            fullWidth
            sx={{ mt: 4 }}
          >
            {t("pages.login.button")}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
