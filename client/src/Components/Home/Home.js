import React from 'react';
import Header from './Header/Header.js';
import {connect} from 'react-redux';
import {logUserIn , logUserOut} from '../../actions/actions.js'


const MapStateToProps = (state) => {
    return {    
        UserLoggedIn: state.UserLoggedIn
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        logUserIn: () => dispatch(logUserIn())
    };
};

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
        return( 
            <>
            <Header />
                <button onClick = {this.props.logUserIn}>hey</button>
            </>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);