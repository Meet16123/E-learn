import Login from '../pages/Login/index';
import Courses from '../pages/Courses';
import Dashboard from '../components/dashboard';
import Schools from '../pages/Schools';

export const openRoutes = [
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
];

export const privateRoutes = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    path: 'courses',
    name: 'Courses',
    exact: true,
    component: Courses,
  },
  {
    path: 'schools',
    name: 'Schools',
    exact: true,
    component: Schools,
  },
];
