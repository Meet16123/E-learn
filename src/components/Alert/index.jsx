import React, { useState } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import { Alert, Collapse, IconButton } from '@mui/material';

const AlertIcon = (props) => {
  const { severity, isOpen, setIsOpen, message } = props;

  console.log('here', isOpen);
  return (
    <Collapse in={isOpen}>
      <Alert
        sx={{ mb: 2 }}
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              console.log('here123 ==', isOpen);
              setIsOpen(!isOpen);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Collapse>
  );
};

export default AlertIcon;
