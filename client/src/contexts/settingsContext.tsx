import React from "react";
import { useSettingsQuery } from "../queries/settings";
import { Settings } from "../types/Settings";

const SettingsContext = React.createContext({} as Settings);
SettingsContext.displayName = "SettingsContext";

const SettingsProvider: React.FC = (props) => {
  const { isSuccess, data } = useSettingsQuery();

  if (isSuccess && data) {
    return <SettingsContext.Provider value={{ ...data }} {...props} />;
  }

  return null;
};

export { SettingsContext, SettingsProvider };
