import React from 'react';
// import { Link } from 'react-router-dom';
import '../../../Stylesheets/Home/header/header.css';
import Logo from '../../LogoComp.js';
import SocialNav from './SocialNav.js';
import CartWishList from './CartWishList.js';

function Header(){
        return(
            <div className = "header-main py-2">
                <div className="container">
                    <div className="header-contents d-flex justify-content-between align-items-center mb-2">
                        <Logo />
                        <SocialNav />
                    </div>
                    <div className="header-contents d-flex justify-content-between align-items-center">
                        <CartWishList />
                    </div>
                </div>
            </div>
        )
}

export default Header;