import React from 'react';
import '../../../Stylesheets/Home/Products/singleProduct.css'

function SingleProduct(props){
    return(
        <div className="item-container d-flex flex-column p-1 mb-3">
            <figure>
                <img src={props.productData.image} alt="product" />
            </figure>
            <div className="product-details d-flex justify-content-between align-items-center">
                <p className="product-name w-70 py-2">
                    {props.productData.title}
                </p>
                <p className="product-price">
                    $ {props.productData.price}
                </p>
            </div>
        </div>
    )
}

export default SingleProduct;