export const setToken = (token) => localStorage.setItem('token', token);

export const deleteSession = () => localStorage.removeItem('token');

export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => !!getToken();
