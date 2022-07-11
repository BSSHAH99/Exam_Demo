import React from "react";
import RequireAuth from "./RequireAuth";
import { Route } from "react-router-dom";
export const mapRoute = (array) => {
  return array.map(({ path, goto, requireAuth, subRoutes = null, index }) => (
    <React.Fragment key={path || goto}>
      <Route
        path={path}
        index={index}
        element={requireAuth ? <RequireAuth>{goto}</RequireAuth> : goto}
      >
        {subRoutes ? <>{mapRoute(subRoutes)}</> : null}
      </Route>
    </React.Fragment>
  ));
};
