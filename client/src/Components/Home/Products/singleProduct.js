import React from 'react';
import {connect} from 'react-redux';
import '../../../Stylesheets/Home/Products/singleProduct.css'
import { openProduct } from '../../../actions/actions';

const MapDispatchToProps = (dispatch) => {
    return {
        openProduct: (productData) => dispatch(openProduct(productData))
    };
};

function SingleProduct(props){
    return(
        <div className="item-container d-flex flex-column p-1 mb-4" onClick = {() => {props.openProduct(props.productData)}}>
            <figure>
                <img src={props.productData.image} alt="product" />
            </figure>
            <div className="product-details d-flex justify-content-between align-items-center">
                <p className="product-name py-2">
                    {props.productData.title}
                </p>
                <p className="product-price">
                    ${props.productData.price}
                </p>
            </div>
        </div>
    )
}

export default connect (null, MapDispatchToProps)(SingleProduct);