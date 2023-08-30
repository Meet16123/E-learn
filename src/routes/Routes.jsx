import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { openRoutes, privateRoutes } from './RouteList';
import { isAuthenticated } from '../helpers/session';

const AllRoutes = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [isAuthenticated()]);

  return (
    <Routes>
      {openRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.component />}
        ></Route>
      ))}
      {isAuthenticated()
        ? privateRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            ></Route>
          ))
        : null}
    </Routes>
  );
};
export default AllRoutes;
