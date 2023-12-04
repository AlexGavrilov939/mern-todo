const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
};

export const PATH_AUTH = {
  login: "/login",
};

export const PATH_PAGE = {
  home: "/",
  page404: "/404",
};

export const PATH_CAPITAL = {
  root: "/capital",
};

const ROOTS_CONNECTOR_REDIRECT_URI = "/connector-redirect-uri";
export const PATH_CONNECTOR_REDIRECT_URI = {
  root: ROOTS_CONNECTOR_REDIRECT_URI,
  native: path(ROOTS_CONNECTOR_REDIRECT_URI, "/native"),
  custom: path(ROOTS_CONNECTOR_REDIRECT_URI, "/custom"),
};

const ROOTS_ONBOARDING = "/onboarding";
export const PATH_ONBOARDING = {
  root: ROOTS_ONBOARDING,
  connectSystems: path(ROOTS_ONBOARDING, "/connect-systems"),
  connectorLinked: path(ROOTS_ONBOARDING, "/connect-systems/connector-linked"),
  customFivetranConnector: path(
    ROOTS_ONBOARDING,
    "/connect-systems/custom-fivetran-connector",
  ),
  customFivetranConnectorConnectionTest: path(
    ROOTS_ONBOARDING,
    "/connect-systems/custom-fivetran-connector/connection-test",
  ),
  customFivetranConnectorRedirectBack: path(
    ROOTS_ONBOARDING,
    "/connect-systems/custom-fivetran-connector/",
  ),
  verification: path(ROOTS_ONBOARDING, "/verification"),
  underReview: path(ROOTS_ONBOARDING, "/under-review"),
};

export const PATH_STATEMENT = {
  root: "/statement",
};

const ROOT_PAYMENTS = "/payments";
export const PATH_PAYMENTS = {
  root: ROOT_PAYMENTS,
  charge: path(ROOT_PAYMENTS, "/charge"),
  subscription: path(ROOT_PAYMENTS, "/subscription"),
  transactions: path(ROOT_PAYMENTS, "/transactions"),
  refunds: path(ROOT_PAYMENTS, "/refunds"),
  settlements: path(ROOT_PAYMENTS, "/settlements"),
};

const ROOT_CARDS = "/cards";
export const PATH_ERAD_CARD = {
  root: ROOT_CARDS,
  detail: path(ROOT_CARDS, "/details"),
  transactions: path(ROOT_CARDS, "/transactions"),
};

export const PATH_DASHBOARD = {
  root: "/dashboard",
};

const ROOTS_SETTINGS = "/settings";
export const PATH_SETTINGS = {
  root: ROOTS_SETTINGS,
  account: path(ROOTS_SETTINGS, "/account"),
  company: path(ROOTS_SETTINGS, "/company"),
  dataSources: path(ROOTS_SETTINGS, "/data-sources"),
  team: path(ROOTS_SETTINGS, "/team"),
  dataSourcesAddNewConnector: path(
    ROOTS_SETTINGS,
    "/data-sources/add-new-connector",
  ),
  dataSourcesConnectorLinked: path(
    ROOTS_SETTINGS,
    "/data-sources/add-new-connector/connector-linked",
  ),
  dataSourcesCustomFivetranConnector: path(
    ROOTS_SETTINGS,
    "/data-sources/add-new-connector/custom-fivetran-connector",
  ),
  dataSourcesCustomFivetranConnectorConnectionTest: path(
    ROOTS_SETTINGS,
    "/data-sources/add-new-connector/custom-fivetran-connector/connection-test",
  ),
  dataSourcesCustomFivetranConnectorRedirectBack: path(
    ROOTS_SETTINGS,
    "/data-sources/add-new-connector/custom-fivetran-connector/",
  ),
};

export const PATH_AFTER_LOGIN = PATH_CAPITAL.root;
