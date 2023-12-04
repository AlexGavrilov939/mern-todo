import { useQuery, UseQueryResult } from "react-query";
import { Settings } from "../types/Settings";
import { fetch } from "../utils/dataAccess";

export const getSettings = async (): Promise<Settings> => {
  const { data } = await fetch({ url: "/settings" });
  return data;
};

export const useSettingsQuery = (): UseQueryResult<Settings, Error> => {
  return useQuery("settings", () => getSettings());
};
