import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllRoutes from './routes/Routes';
import Login from './pages/Login/index';
import Header from './pages/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <AllRoutes />
      </Header>
    </BrowserRouter>
  );
}

export default App;
