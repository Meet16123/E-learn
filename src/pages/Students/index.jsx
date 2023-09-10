import React from 'react'
import Header from '../Sidebar';
import { Box } from '@mui/material';

export default function Students() {
  return (
    <Box sx={{ display: 'flex', marginTop: 5 }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>HEy Students</h1>
      </Box>
    </Box>
  )
}
