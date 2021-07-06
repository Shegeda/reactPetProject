import React from 'react';

import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>
                Something goes wrong :( <br/> But we already asked Daenerys to fix it ;)
            </span>
        </>
    )
}

export default ErrorMessage;