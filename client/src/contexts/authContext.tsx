import React, { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useLogout } from "../queries/auth";
import { setSession } from "../utils/jwt";

interface AuthContextValue {}

const AuthContext = React.createContext<AuthContextValue | null>(null);
AuthContext.displayName = "AuthContext";

const AuthProvider: React.FC = (props) => {
  const queryClient = useQueryClient();

  const logoutMutation = useLogout();

  const value = React.useMemo(
    () => ({
      logout: logoutMutation.mutateAsync,
      isLoggingOut: logoutMutation.isLoading,
    }),
    [logoutMutation.mutateAsync, logoutMutation.isLoading],
  );

  useEffect(() => {
    const storageEventListener = async (event: StorageEvent) => {
      // Refetch user when we receive a login event from another window.

      // Logout user when we receive a logout event from another window.
      if (event.key === "app-logout") {
        setSession(null);
        queryClient.clear();
      }
    };

    window.addEventListener("storage", storageEventListener);

    return () => {
      window.removeEventListener("storage", storageEventListener);
    };
  }, [queryClient]);

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
