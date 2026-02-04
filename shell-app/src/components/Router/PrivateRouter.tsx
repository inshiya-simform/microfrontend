import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouterProps {
  children: React.ReactNode;
}
function PrivateRouter({ children }: PrivateRouterProps) {
  const token = localStorage.getItem("token");
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRouter;
