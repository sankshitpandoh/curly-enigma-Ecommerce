import React from 'react';
import Header from './Header/Header.js';
import {connect} from 'react-redux';
import {logUserIn , logUserOut} from '../../actions/actions.js'

class Home extends React.Component{
    state = {
        wishList: [],
        // userLoggedIn: false
    }


    componentDidMount(){
        console.log(this.props.UserLoggedIn)
    }

    // getUserData = async() => {
    //     let x = localStorage.getItem("userId");
    //     console.log(x)
    // }

    render(){
        console.log(this.props.UserLoggedIn)
        return( 
            <>
            <Header />
            </>
        )
    }
}

export default Home