import { Navigate, Outlet, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { PATH_AUTH } from "../components/Routes/paths";
import useAuth from "../hooks/useAuth";

const AuthGuard = ({ children }: { children?: JSX.Element }) => {
  // const { isAuthenticated, isInitialized } = useAuth();
  const location = useLocation();

  // if (!isInitialized) {
  //   return <LoadingScreen />;
  // }

  // if (!isAuthenticated) {
  //   return (
  //     <Navigate
  //       to={PATH_AUTH.login}
  //       state={{ from: location }}
  //       replace={true}
  //     />
  //   );
  // }

  return children || <Outlet />;
};

export default AuthGuard;
