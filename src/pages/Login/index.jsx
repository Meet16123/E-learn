import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import {
  AccountCircle,
  Password as PasswordIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import {
  FormControl,
  Grid,
  Button,
  TextField,
  CardContent,
  Card,
  Box,
  FormHelperText,
  Input,
  InputLabel,
  Alert,
  Collapse,
  IconButton,
} from '@mui/material';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(true);

  function loginHandle() {
    // API call
    const payload = {
      email,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_HOST}/admin/login`, payload)
      .then((data) => {
        console.log(data.data);
        const response = data.data;
        setOpen(true);
        setErrorMessage('');
        setSuccessMessage(response.message);
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        setOpen(true);
        setSuccessMessage('');
        setErrorMessage(errorMessage);
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
                    color: 'action.active',
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
                    color: 'action.active',
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
      {successMessage ? (
        <Collapse in={open}>
          <Alert
            sx={{ mb: 2 }}
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  console.log('here123');
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {successMessage}
          </Alert>
        </Collapse>
      ) : (
        ''
      )}

      {errorMessage ? (
        <Collapse in={open}>
          <Alert
            sx={{ mb: 2 }}
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {errorMessage}
          </Alert>
        </Collapse>
      ) : (
        ''
      )}
    </Card>
  );
};

export default Login;
