export const setToken = (token) => localStorage.setItem('token', token);

export const deleteSession = (key) => localStorage.removeItem(key);

export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => !!getToken();
