import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH_AFTER_LOGIN, PATH_AUTH } from "../components/Routes/paths";
import { LoginCredentials } from "../types/LoginCredentials";
import { Token } from "../types/Token";
import { User } from "../types/User";
import { fetch } from "../utils/dataAccess";
import { setSession } from "../utils/jwt";
import ViolationError from "../utils/violationError";

export const login = async (values: LoginCredentials): Promise<Token> => {
  const { data } = await fetch({
    url: "/token/authentication",
    method: "POST",
    data: values,
  });
  return data;
};

type LoginLocationState = {
  from?: {
    pathname?: string;
  };
};

export const useLogin = (
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<User, Error>>
): UseMutationResult<Token, Error | ViolationError, LoginCredentials> => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LoginLocationState;
  const from = state?.from?.pathname || PATH_AFTER_LOGIN;

  return useMutation(login, {
    onSuccess: (data) => {
      // Start user session.
      setSession(data.token);
      window.localStorage.setItem("app-login", Date.now().toString());
      // Refetch current user.
      refetch();
      navigate(from, { replace: true });
    },
  });
};

export const logout = async () => {
  const { data } = await fetch({ url: "/token/revoke", method: "POST" });

  return data;
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(logout, {
    onSettled: () => {
      setSession(null);
      queryClient.clear();
      window.localStorage.setItem("app-logout", Date.now().toString());
      navigate(PATH_AUTH.login, { replace: true });
    },
  });
};
