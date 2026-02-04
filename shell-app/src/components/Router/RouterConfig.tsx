import type { RouteItems } from "../../type/routeType";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const ROUTES: RouteItems[] = [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/",
    element: Main,
    isAuth: true,
    children: [
      {
        path: "",
        element: Home,
        isAuth: true,
      },
    ],
  },
];
