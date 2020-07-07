import React from 'react';
import '../../../Stylesheets/Home/header/socialNav.css';

function SocialNav(){
    return(
        <div className = "social-nav">
            <a href="#" className="m-2">
                <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="m-2">
                <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="m-2">
                <i className="fa fa-youtube"></i>
            </a>
            <a href="#" className="m-2">
                <i className="fa fa-pinterest"></i>
            </a>
            <a href="#" className="m-2">
                <i className="fa fa-instagram"></i>
            </a>
        </div>
    )
}
export default SocialNav