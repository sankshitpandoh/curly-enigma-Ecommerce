import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';
import '../Stylesheets/pageNotFound.css';

class PageNotFound extends React.Component{
    render(){
        return(
            <div className="d-flex">
                    <div className="error-page-container w-75 p-3">
                        <h1>
                        Oops!
                        </h1>
                        <p>
                            The page you are looking for is
                            <span> missing. </span>
                        </p>
                    </div>
                    <div className="take-back w-25 p-3 d-flex flex-column align-items-center">
                        <figure className="mb-5">
                            <img className="mb-3" src={Logo} alt="error"/>
                        </figure>
                        <Link to="/">
                            <div className="px-4 py-2 d-flex flex-column align-items-center mt-5">
                                <p className="text-center">
                                    Go to Home
                                </p>
                            </div>
                        </Link>
                </div>

            </div>
        )
    }
}

export default PageNotFound;

