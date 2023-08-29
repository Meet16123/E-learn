import React, { createContext, useState } from 'react';

const initialValue = {
  userData: null,
  setUserData: () => {},
};

export const AuthContext = createContext(initialValue);

export function AuthProvider({ children }) {
  const [userData, setUserdata] = useState(initialValue.userData);

  const getAdminToken = () => {
    return userData ? userData?.token : null;
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserdata,
        getAdminToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
