import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import type { RouteItems } from "../../type/routeType";
import { ROUTES } from "./RouterConfig";

const Router = () => {
  return <Routes>{getRoutesComponent(ROUTES)}</Routes>;
};

function getRoutesComponent(routeItem: RouteItems[]) {
  return routeItem.map((routeItem) => {
    let Component = <routeItem.element />;
    if (routeItem.isAuth) {
      Component = (
        <PrivateRouter>
          <routeItem.element />
        </PrivateRouter>
      );
    }
    if (routeItem.children) {
      return (
        <Route path={routeItem.path} element={Component}>
          {getRoutesComponent(routeItem.children)}
        </Route>
      );
    }
    return <Route path={routeItem.path} element={Component} />;
  });
}

export default Router;