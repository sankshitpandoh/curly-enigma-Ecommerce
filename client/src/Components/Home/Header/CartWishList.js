import React from 'react';
import '../../../Stylesheets/Home/header/cartWishList.css';

function CartWishList(){
    return(
        <div className="menu-container">
            <div className="d-flex flex-wrap">
                <div className="col-6">
                    <div className="single-option d-flex justify-content-center align-items-center">
                        <p>
                            Log In
                        </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="single-option d-flex justify-content-center align-items-center">
                        <p>
                            WishList (0)
                        </p>
                    </div>
                </div>
                <div className="col-12"></div>
                <div className="col-6">
                    <div className="single-option d-flex justify-content-center align-items-center">
                        <p>
                            View Cart
                        </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="single-option d-flex justify-content-center align-items-center">
                        <p>
                            Checkout
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartWishList;