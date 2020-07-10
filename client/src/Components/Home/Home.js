import React from 'react';
import Header from './Header/Header.js';
import SingleProduct from './Products/singleProduct.js';
import ProductContainer from './Products/productContainer.js';

// import {connect} from 'react-redux';
// import {logUserIn , logUserOut} from '../../actions/actions.js'

class Home extends React.Component{
    state = {
        wishList: [],
        newProducts: []
    }

    componentDidMount(){
        this.fetchNewProducts();
        // this.fetchTopProducts();
        // this.fetchSaleProducts();
    }

    fetchNewProducts = async() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch('/getNewProducts', requestOptions);
        let serverResponse = await response.json();
        console.log(serverResponse.responseObject)
        this.setState({
            newProducts: serverResponse.responseObject,
        },)
        
    }

    render(){
        return( 
            <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <ProductContainer itemsData = {this.state.newProducts} />
                        <ProductContainer itemsData = {[]} />
                        <ProductContainer itemsData = {[]} />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Home