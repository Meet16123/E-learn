import Login from '../pages/Login/index';
import Header from '../pages/Header/Header';

export default [
  {
    path: '/',
    name: 'Login',
    exact: true,
    component: Login,
  },
  {
    path: 'login',
    name: 'Login',
    exact: true,
    component: Login,
  },
  {
    path: 'dashboard',
    name: 'Header',
    exact: true,
    component: Header,
  },
];
