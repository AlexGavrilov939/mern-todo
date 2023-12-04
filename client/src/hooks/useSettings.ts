import React from "react";
import { SettingsContext } from "../contexts/settingsContext";

const useSettings = () => {
  const context = React.useContext(SettingsContext);
  if (context === undefined) {
    throw new Error(`useSettings must be used within a SettingsProvider`);
  }
  return context;
};

export default useSettings;
