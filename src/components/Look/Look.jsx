import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext'

const Look = () => {

    const { username , toggleTheme, theme } = useContext(UserContext);

    return (
        <div style={{background: theme }} >
            <h1>Welcome, {username}!</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1>Look 1</h1>
        </div>
    );
};

export default Look;