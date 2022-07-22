import React from "react";
import RequireAuth from "./RequireAuth";
import { Route } from "react-router-dom";
export const mapRoute = (array) => {
  return array.map(
    ({ path, component, requireAuth, subRoutes = null, index }) => (
      <React.Fragment key={path || component}>
        <Route
          path={path}
          index={index}
          element={
            requireAuth ? <RequireAuth>{component}</RequireAuth> : component
          }
        >
          {subRoutes ? <>{mapRoute(subRoutes)}</> : null}
        </Route>
      </React.Fragment>
    )
  );
};
