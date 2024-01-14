// import React from 'react';
// import Box from '@mui/material/Box';
// import Header from '../Sidebar';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import { ThemeProvider } from '@emotion/react';
// import GroupIcon from '@mui/icons-material/Group';
// import Grid from '@mui/material/Unstable_Grid2';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Dashboard() {
//   return (
//     <Box sx={{ display: 'flex', marginTop: 10 }}>
//       <Header />
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Card sx={{ maxWidth: 250 }}>
//           <CardActionArea>
//             <GroupIcon sx={{ width: '100%', height: 100, margin: 'auto' }} />
//             <CardContent>
//               <Typography gutterBottom variant="h2" component="div">
//                 23
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Students
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Box>

//     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Card sx={{ maxWidth: 250 }}>
//           <CardActionArea>
//             <GroupIcon sx={{ width: '100%', height: 100, margin: 'auto' }} />
//             <CardContent>
//               <Typography gutterBottom variant="h2" component="div">
//                 23
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Students
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Box>

//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Card sx={{ maxWidth: 250 }}>
//           <CardActionArea>
//             <GroupIcon sx={{ width: '100%', height: 100, margin: 'auto' }} />
//             <CardContent>
//               <Typography gutterBottom variant="h2" component="div">
//                 23
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Students
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Box>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Card sx={{ maxWidth: 250 }}>
//           <CardActionArea>
//             <GroupIcon sx={{ width: '100%', height: 100, margin: 'auto' }} />
//             <CardContent>
//               <Typography gutterBottom variant="h2" component="div">
//                 23
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Students
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Box>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Card sx={{ maxWidth: 250 }}>
//           <CardActionArea>
//             <GroupIcon sx={{ width: '100%', height: 100, margin: 'auto' }} />
//             <CardContent>
//               <Typography gutterBottom variant="h2" component="div">
//                 23
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Students
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Box>

//     </Box>

    
//   );
// }




import React from "react";
import { makeStyles } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const data = {
    name: [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 }
    ],
    id: [1, 2, 3, 4]
  };
  return (
    <div className={classes.root}>
      {data.id.map((elem) => (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.name.map((elem) => (
            <Grid item xs={3} key={data.name.indexOf(elem)}>
              <Card>
                <CardHeader
                  title={`quarter : ${elem.quarter}`}
                  subheader={`earnings : ${elem.earnings}`}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Hello World
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
}