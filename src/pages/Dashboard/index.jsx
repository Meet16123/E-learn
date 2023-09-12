import React from 'react';
import Box from '@mui/material/Box';
import Header from '../Sidebar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import GroupIcon from '@mui/icons-material/Group';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', marginTop: 10 }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <GroupIcon sx={{ width: '100%', height: 100, margin: 'auto' }} />
            <CardContent>
              <Typography gutterBottom variant="h2" component="div">
                23
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Students
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
