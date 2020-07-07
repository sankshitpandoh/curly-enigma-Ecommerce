import React from 'react';
import Header from './Header/Header.js';


class Home extends React.Component{
    state = {
        wishList: [],
        userLoggedIn: false
    }

    componentDidMount(){
        this.state.userLoggedIn &&
            this.getUserData()

    }

    getUserData = async() => {
        let x = localStorage.getItem("userId");
        console.log(x)
    }

    render(){
        return(
            <Header />
        )
    }
}

export default Home;