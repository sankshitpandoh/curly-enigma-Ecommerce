import React from 'react';
import {connect} from 'react-redux';
import { closeProduct } from '../../../actions/actions.js';
import ExpandedProductDetails from './expandedProductDetails.js';
import '../../../Stylesheets/Home/Products/singleExpandedProduct.css';

const MapStateToProps = (state) => {
    return {    
        currentProduct : state.MainReducer.currentProduct
		// openProduct: state.MainReducer.openProduct
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        closeProduct: (productData) => dispatch(closeProduct(productData))
    };
};

class SingleExpandedProduct extends React.Component{
    render(){
        return(
            <div className="single-expanded-product mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="product-image-container">
                            <figure>
                                <img src={this.props.currentProduct.image} alt="product" />
                            </figure>
                            <div className="other-images">
                                
                            </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <ExpandedProductDetails details = {this.props.currentProduct} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(SingleExpandedProduct);