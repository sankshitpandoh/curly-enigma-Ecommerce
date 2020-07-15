import React from 'react';
import '../../../Stylesheets/Home/Products/expandedProductDetails.css'

function ExpandedProductDetails(props){
    return(
        <div className="product-details-container d-flex flex-column">
            <h1 className="mb-4">{props.details.title}</h1>
            <div className = "price-container d-flex align-items-center justify-content-between mb-3">
                <span className="price">${props.details.price}</span>
                <div className="d-flex flex-column">
                    <p>Category : <span>{props.details.category}</span></p>
                    <p>Availability : 
                        <span className={props.details.availability ? "" : "no-stock"} >{props.details.availability ? "In Stock" : "Out of Stock"}</span>
                    </p>
                </div>
            </div>
            <div className = "quick-overview-container py-2 mb-4">
                <p className="heading mb-2">QUICK OVERVIEW:</p>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className = "product-size-container py-2">
                <p className="heading mb-2">SIZE</p>
                <p>
                </p>
            </div>  
        </div>
    )
}   

export default ExpandedProductDetails