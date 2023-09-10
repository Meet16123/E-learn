import React from 'react';
import Box from '@mui/material/Box';
import Header from '../Sidebar';

export default function Notifications() {
  return (
    <Box sx={{ display: 'flex', marginTop: 5 }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>HEy Notifications</h1>
      </Box>
    </Box>
  );
}
