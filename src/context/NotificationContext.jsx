import React, { createContext, useState } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import { Alert, Collapse, IconButton } from '@mui/material';

const initialValue = {
  isNotificationOpen: false,
  setIsNotificationOpen: () => {},
  notificationData: null,
  setNotificationData: () => {},
};

export const NotificationContext = createContext(initialValue);

export function NotificationProvider({ children }) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(
    initialValue.isNotificationOpen
  );
  const [notificationData, setNotificationData] = useState(
    initialValue.notificationData
  );

  return (
    <NotificationContext.Provider
      value={{
        isNotificationOpen,
        setIsNotificationOpen,
        notificationData,
        setNotificationData,
      }}
    >
      {notificationData && (
        <Collapse in={isNotificationOpen}>
          <Alert
            sx={{ mb: 2 }}
            severity={notificationData?.severity}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setIsNotificationOpen(!isNotificationOpen);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {notificationData?.message}
          </Alert>
        </Collapse>
      )}

      {children}
    </NotificationContext.Provider>
  );
}
