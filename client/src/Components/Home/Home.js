import React from 'react';
import Header from './Header/Header.js';
import {connect} from 'react-redux';
import {logUserIn , logUserOut} from '../../actions/actions.js'


const MapStateToProps = (state) => {
    console.log(state);
    return {    
        UserLoggedIn: state.PandohReducer.userLoggedIn
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
        console.log(this.props.UserLoggedIn)
        return( 
            <>
            <Header />
        <button onClick = {this.props.logUserIn}> 
        { String( this.props.UserLoggedIn ) }
        </button>
        <h1>
        { String( this.props.UserLoggedIn ) }
        {this.props.UserLoggedIn} 

        </h1>
            </>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);