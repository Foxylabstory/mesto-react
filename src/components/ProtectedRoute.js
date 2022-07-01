import React from "react";
import { Outlet, Navigate } from "react-router-dom";

/*export default function ProtectedRoute({ component: Component, ...props }) {
    return (
        <Route>
          {() =>
            props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" />
          }
        </Route>
      );
}*/

const ProtectedRoute = (props) => {
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return props.loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
