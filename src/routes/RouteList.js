import Login from '../pages/Login/index';
import Header from '../pages/Header/Header';
import Courses from '../pages/Courses/Courses';

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
  {
    path: 'courses',
    name: 'Courses',
    exact: true,
    component: Courses,
  },
];
