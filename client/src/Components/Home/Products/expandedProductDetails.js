import React from 'react';
import '../../../Stylesheets/Home/Products/expandedProductDetails.css'

function ExpandedProductDetails(props){
    return(
        <div className="product-details-container d-flex flex-column">
            <h1 className="mb-4">{props.details.title}</h1>
            <div className = "price-container d-flex align-items-center justify-content-between">
                <span className="price">${props.details.price}</span>
                <div className="d-flex flex-column">
                    <p>Category : <span>{props.details.category}</span></p>
                    <p>Availability : 
                        <span className={props.details.availability ? "" : "no-stock"} >{props.details.availability ? "In Stock" : "Out of Stock"}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExpandedProductDetails