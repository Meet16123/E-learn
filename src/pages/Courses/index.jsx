import React from 'react';
import Box from '@mui/material/Box';
import Header from '../Sidebar';

export default function Courses() {
  return (
    <Box sx={{ display: 'flex', marginTop: 5 }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>HEy Courses</h1>
      </Box>
    </Box>
  );
}
