import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllRoutes from './routes/Routes';
import Login from './pages/Login/index';

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
