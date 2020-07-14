import React from 'react';
import Header from './Header/Header.js';
import {connect} from 'react-redux';
import ProductContainer from './Products/productContainer.js';

// import {connect} from 'react-redux';
// import {logUserIn , logUserOut} from '../../actions/actions.js'

const MapStateToProps = (state) => {
    return {    
        currentProduct : state.MainReducer.currentProduct,
		openProduct: state.MainReducer.openProduct
    };
};

class Home extends React.Component{
    state = {
        wishList: [],
        newProducts: [],
        topProducts: [],
        saleProducts: []
    }

    componentDidMount(){
        this.fetchMiscProducts();
    }

    fetchMiscProducts = async() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch('/getNewProducts', requestOptions);
        let serverResponse = await response.json();
        console.log(serverResponse.responseObject)
        this.setState({
            newProducts: serverResponse.responseObject.newProducts,
            topProducts: serverResponse.responseObject.topProducts,
            saleProducts: serverResponse.responseObject.saleProducts,
        })
        
    }

    render(){
        return( 
            <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <ProductContainer sectionTitle = {"New Products"} itemsData = {this.state.newProducts} />
                        <ProductContainer sectionTitle = {"Top Products"} itemsData = {this.state.topProducts} />
                        <ProductContainer sectionTitle = {"Sale Products"} itemsData = {this.state.saleProducts} />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default  connect(MapStateToProps, null)(Home)