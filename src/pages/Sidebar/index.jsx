import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { sideNavs } from './Sidebar.js';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import {  LogoutOutlined } from '@mui/icons-material';
import { createTheme } from '@mui/material';
import { deleteSession } from '../../helpers/session.js';

const drawerWidth = 240;


// const darkTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Header = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  function handleClick(path) {
    navigate(`/${path}`);
  }
  function handelLogout() {
    deleteSession('token');
    navigate(`/login`);
  }
  const light = {
    palette: {
    mode: 'light',
    },
  }
  
   const dark = {
    palette: {
    mode: 'dark',
    },
  }
  const [theme, setTheme] = useState(true);

  const icon = !theme ? <LightModeIcon /> : <ModeNightIcon /> 

const appliedTheme =  createTheme(theme ? light : dark)

  return (
    <ThemeProvider theme={appliedTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            sx={{position: "fixed", top: 10, right: 75, zIndex: 2000}}
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
              {/* Log-Out Button */}
              <LogoutOutlined onClick={() => handelLogout()} sx={{position: "fixed", cursor: "pointer", top: 18, right: 25, zIndex: 2000}} />
              
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={() => setOpen(!open)}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            {sideNavs.map((obj, index) => (
              <ListItem
                key={obj.name}
                disablePadding
                sx={{ display: 'block' }}
                onClick={() => handleClick(obj?.name)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {obj.logo}
                  </ListItemIcon>

                  <ListItemText
                    primary={obj.name.charAt(0).toUpperCase() + obj.name.slice(1).toLowerCase()}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default Header;

