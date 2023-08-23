import * as React from 'react';
import { Routes, Route, BrowserRouter, withRouter } from 'react-router-dom';
import RoutesList from './RouteList';

class AllRoutes extends React.Component {
  render() {
    return (
      <Routes>
        {RoutesList.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          ></Route>
        ))}
      </Routes>
    );
  }
}

export default AllRoutes;
