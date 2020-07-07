import React from 'react';
import '../Stylesheets/LogoComp.css';
import logoImage from '../Images/logo.png';
import { Link } from 'react-router-dom';

function Logo(){
    return(
        <Link to="/">
        <div className="logo-container d-flex align-items-center">
            <figure>
                <img src={logoImage} alt="logo" />
            </figure>
            <span className="px-3 py-1">
                Enigma
            </span>
        </div>
        </Link>
    )
}

export default Logo