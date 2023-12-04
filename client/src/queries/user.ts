import { useQuery, UseQueryResult } from "react-query";
import { User } from "../types/User";
import { fetch } from "../utils/dataAccess";

export const getMe = async (): Promise<User> => {
  const { data } = await fetch({ url: `/me?r=${new Date().getTime()}` });
  return data;
};

export const useMeQuery = (): UseQueryResult<User, Error> => {
  return useQuery("getMe", () => getMe());
};

export const getUser = async (user: string): Promise<User> => {
  const { data } = await fetch({ url: user });
  return data;
};

export const useUserQuery = (user: string): UseQueryResult<User, Error> => {
  return useQuery(["getUser", user], () => getUser(user), {
    enabled: !!user,
  });
};
