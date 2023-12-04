import { Outlet } from "react-router-dom";

const GuestGuard = ({ children }: { children?: JSX.Element }) => {
  return children || <Outlet />;
};

export default GuestGuard;
