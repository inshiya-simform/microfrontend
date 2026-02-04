export type RouteItems = {
  path: string;
  element: React.FC;
  children?: RouteItems[];
  index?: boolean;
  isAuth?: boolean;
};