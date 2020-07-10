import React from 'react';
import SingleProduct from './singleProduct';

class ProductContainer extends React.Component{
    render(){
        const items = this.props.itemsData.map((x, index) => {
            return <div className="col-4" key = {index}>
                <SingleProduct productData = {x} />
            </div>
        })
        return(
            <div className="row py-2 px-1">
                {items}
            </div>
        )
    }
}

export default ProductContainer;