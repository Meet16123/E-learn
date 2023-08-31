import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { NotificationContext } from '../../context/NotificationContext';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../helpers/session';
import { isAuthenticated } from '../../helpers/session';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const notificationContext = useContext(NotificationContext);

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard');
    }
  }, []);

  function loginHandle() {
    // API call
    const payload = {
      email,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_HOST}/admin/login`, payload)
      .then((data) => {
        const response = data.data;
        notificationContext.setNotificationData({
          severity: 'success',
          message: response.message,
        });

        notificationContext.setIsNotificationOpen(true);

        // set Auth data
        authContext.setUserdata({
          token: response.token,
          userId: response.result.userId,
          name: response.result.name,
        });

        // set token in local storage
        setToken(response.token);

        setTimeout(() => {
          navigate('/courses');
        }, 500);
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        notificationContext.setNotificationData({
          severity: 'error',
          message: errorMessage,
        });
        notificationContext.setIsNotificationOpen(true);
      });
  }

  function emailHandle(e) {
    setEmail(e.target.value);
  }

  function passwordHandle(e) {
    setPassword(e.target.value);
  }

  return (
    <Card
      sx={{
        minWidth: 100,
        width: '40%',
        margin: 'auto',
        padding: '15px',
        marginTop: '10%',
        background: '#9c9c9c',
      }}
    >
      <CardContent>
        <Grid container spacing={15} justifyContent="center">
          <Grid item>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                <AccountCircle
                  sx={{
                    mr: 1,
                    my: 0.5,
                    color: 'white',
                  }}
                />
                <FormControl variant="standard" required>
                  <InputLabel
                    htmlFor="email"
                    label="Email"
                    sx={{ color: 'white' }}
                  >
                    Email
                  </InputLabel>
                  <Input
                    className="input"
                    id="email"
                    name="email"
                    onChange={emailHandle}
                    sx={{ color: 'white' }}
                  />
                </FormControl>
              </Box>
              <br />
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                <PasswordIcon
                  sx={{
                    mr: 1,
                    my: 0.5,
                    color: 'white',
                  }}
                />

                <FormControl variant="standard" required>
                  <InputLabel
                    htmlFor="password"
                    label="Password"
                    sx={{ color: 'white' }}
                  >
                    Password
                  </InputLabel>
                  <Input
                    className="input"
                    id="password"
                    name="password"
                    type="password"
                    onChange={passwordHandle}
                    sx={{ color: 'white' }}
                  />
                </FormControl>
              </Box>

              <br />
              <Button
                variant="contained"
                size="large"
                onClick={loginHandle}
                sx={{ background: '#747474' }}
              >
                Login
              </Button>
            </Box>
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/common/login-logo.webp"
              width={250}
              height={200}
              alt="Home logo image"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Login;
