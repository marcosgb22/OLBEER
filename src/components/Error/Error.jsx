import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import "./error.css"

const Error = () => {
    return (
        <div className='error-container'>
        <div className='error'>
            <img src="https://i.ibb.co/M5xCxcD/un-vikingo-sorprendido.png" alt="Logo" className="logo-error-img" />
            <h1 className="p_error"> UPS ... Algo falló</h1>
            <Spinner/>
        </div>
        </div>
    );
};

export default Error;

//https://i.ibb.co/M5xCxcD/un-vikingo-sorprendido.png