import React from 'react';
import SingleProduct from './singleProduct';
import '../../../Stylesheets/Home/Products/productContainer.css'

class ProductContainer extends React.Component{
    render(){
        const items = this.props.itemsData.map((x, index) => {
            return <div className="col-4" key = {index}>
                <SingleProduct productData = {x} />
            </div>
        })
        return(
            <div className="product-container py-2">
                <h2>{this.props.sectionTitle}</h2>
                <div className="row py-2 px-1">
                    {items}
                </div>
            </div>
        )
    }
}

export default ProductContainer;