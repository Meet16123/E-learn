import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PushPinIcon from '@mui/icons-material/PushPin';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
export const sideNavs = [
  {
    name: 'dashboard',
    logo: <DashboardIcon />,
  },
  {
    name: 'courses',
    logo: <FolderCopyIcon />,
  },
  {
    name: 'schools',
    logo: <SchoolIcon />,
  },
  {
    name: 'students',
    logo: <PeopleIcon />,
  },
  {
    name: 'subjects',
    logo: <MenuBookIcon />,
  },
  {
    name: 'materials',
    logo: <PushPinIcon />,
  },
  {
    name: 'videos',
    logo: <OndemandVideoIcon />,
  },
  {
    name: 'subscriptions',
    logo: <SubscriptionsIcon />,
  },
  {
    name: 'notifications',
    logo: <NotificationsActiveIcon />,
  },
];
