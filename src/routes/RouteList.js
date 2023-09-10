import Login from '../pages/Login/index';
import Courses from '../pages/Courses';
import Dashboard from '../pages/Dashboard';
import Schools from '../pages/Schools';
import Students from '../pages/Students';
import Subjects from '../pages/Subjects';
import Materials from '../pages/Materials';
import Videos from '../pages/Videos';
import Subscriptions from '../pages/Subscriptions';
import Notifications from '../pages/Notifications';


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
  {
    path: 'students',
    name: 'Students',
    exact: true,
    component: Students,
  },
  {
    path: 'subjects',
    name: 'Subjects',
    exact: true,
    component: Subjects,
  },
  {
    path: 'subjects',
    name: 'Subjects',
    exact: true,
    component: Subjects,
  },
  {
    path: 'materials',
    name: 'Materials',
    exact: true,
    component: Materials,
  },
  {
    path: 'videos',
    name: 'Videos',
    exact: true,
    component: Videos,
  },
  {
    path: 'subscriptions',
    name: 'Subscriptions',
    exact: true,
    component: Subscriptions,
  },
  {
    path: 'notifications',
    name: 'Notifications',
    exact: true,
    component: Notifications,
  },
];
