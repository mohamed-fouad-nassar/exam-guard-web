import { Navigate, Outlet } from "react-router";

import { PATHS } from "@/router/paths";
import type { Role } from "@/types/common.types";
import { mockUser } from "@/lib/mock-user";

interface Props {
  allowedRoles?: Role[];
}

const ProtectedRoute = ({ allowedRoles }: Props) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(mockUser.role)) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
