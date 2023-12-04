import jwtDecode, { JwtPayload } from "jwt-decode";
import axios from "./axios";

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode<JwtPayload>(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp && decoded.exp > currentTime;
};

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
