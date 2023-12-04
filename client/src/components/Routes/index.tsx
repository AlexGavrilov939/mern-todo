import { lazy, Suspense } from "react";
import { Navigate, Route, Routes as ReactRoutes } from "react-router-dom";
import MinimalLayout from "../Layouts/Minimal";
import DashboardLayout from "../Layouts/Dashboard";
import LoadingScreen from "../LoadingScreen";

export const Loadable =
  (Component: React.LazyExoticComponent<React.ComponentType<any>>) =>
  (props: any) => {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };

const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<DashboardLayout />}>
        <Route element={<Navigate to="/todo" replace />} index={true} />
        <Route path="todo" element={<TodoList />}></Route>
      </Route>
      <Route path={"*"} element={<MinimalLayout />}>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>

      <Route path={"*"} element={<Navigate to="/404" replace />} />
    </ReactRoutes>
  );
};
const TodoList = Loadable(lazy(() => import("../TodoList")));
const NotFound = Loadable(lazy(() => import("../Page404")));

export default Routes;
