import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoutesList from './RouteList';
import RequireAuth from './RequireAuth';
class AllRoutes extends React.Component {
  render() {
    return (
      <RequireAuth>
        <Routes>
          {RoutesList.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            ></Route>
          ))}
        </Routes>
      </RequireAuth>
    );
  }
}

export default AllRoutes;
