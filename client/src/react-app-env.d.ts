/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    // NODE_ENV: "development" | "production" | "test";
    REACT_APP_GOOGLE_RECAPTCHA_KEY: string;
    REACT_APP_LEAN_APP_TOKEN: string;
    REACT_APP_LEAN_APP_SANDBOX_MODE: boolean;
    REACT_APP_SENTRY_DSN: string;
    REACT_APP_SENTRY_TRACES_SAMPLE_RATE: number;
    REACT_APP_SITE_ENV: string;
    REACT_APP_STRIPE_PUB_KEY_SANDBOX: string;
    REACT_APP_STRIPE_PUB_KEY_LIVE: string;
    REACT_APP_TAP_PAYMENTS_UAE_API_KEY_SANDBOX: string;
    REACT_APP_TAP_PAYMENTS_UAE_API_KEY_LIVE: string;
    REACT_APP_TAP_PAYMENTS_KSA_API_KEY_SANDBOX: string;
    REACT_APP_TAP_PAYMENTS_KSA_API_KEY_LIVE: string;
    REACT_APP_WOOCOMMERCE_USER_ID: number;
    REACT_APP_ZID_CLIENT_ID: number;
    REACT_APP_ZOHO_CLIENT_ID: string;
    REACT_APP_WAFEQ_CLIENT_ID: string;
    REACT_APP_SALLA_CLIENT_ID: number;
    REACT_APP_LANGUAGE_SWITCHER_ENABLED: string;
    REACT_APP_HOW_IT_WORKS_ENABLED: string;
    REACT_APP_ERAD_CARDS_ENABLED: string;
    REACT_APP_JUNE_WRITE_KEY: string;
  }
}
