import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Stylesheets/Home/header/cartWishList.css';
import {connect} from 'react-redux';
import {logUserIn , logUserOut} from '../../../actions/actions.js'

const MapStateToProps = (state) => {
    return {    
        userLoggedIn: state.MainReducer.userLoggedIn,
        wishList: state.MainReducer.currentWishList,
        cartItems: state.MainReducer.currentCartItems  
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        logUserIn: () => dispatch(logUserIn())
    };
};

function CartWishList(props){
    let cartPrice = 0
    props.cartItems.map((x,index) => {
        cartPrice = cartPrice + x.price
    })
    return(
        <div className="menu-container">
            <div className="d-flex flex-wrap">
                <div className="col-6 p-0">
                    <Link to = {props.userLoggedIn ? "/user" : "/login"}>
                        <div className="single-option d-flex justify-content-center align-items-center p-1" >
                            <p>
                                {props.userLoggedIn ?
                                    "Profile" : "Log In"
                                }
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="col-6 p-0">
                    <div className="single-option d-flex justify-content-center align-items-center p-1">
                        <p>
                            WishList ({props.wishList.length})
                        </p>
                    </div>
                </div>
                <div className="col-12 p-0">
                    <div className="cart-price">
                        <p className="text-center">
                            $ {cartPrice}
                        </p>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="single-option d-flex justify-content-center align-items-center p-1">
                        <p>
                            View Cart
                        </p>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="single-option d-flex justify-content-center align-items-center p-1">
                        <p>
                            Checkout
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(MapStateToProps, MapDispatchToProps)(CartWishList);