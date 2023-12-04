import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('Lalo');
  const [theme, setTheme] = useState('red');

  const updateUser = (newUsername) => {
    setUsername(newUsername);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'red' ? 'blue' : 'red'));
  };

  return (
    <UserContext.Provider value={{ username, theme, updateUser, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext as default };