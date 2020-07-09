import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import LogIn from './login.js';
import SignUp from './signUp.js';
import {logUserIn } from '../../actions/actions.js'



const MapStateToProps = (state) => {
    return {    
        userLoggedIn: state.MainReducer.userLoggedIn,
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        logUserIn: () => dispatch(logUserIn())
    };
};

class LogInDisplay extends React.Component{
    state={
        error: false,
        userLoggedIn: false,
        userId: "",
        logInPage: true,
        statusCode: 0,
        uNameAvailable: true
    }

    checkCredentials = async(username, password) => {
        /* making a POST request to server to check if user credentials are correct */
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username , password: password })
        };
        const response = await fetch('/logInUser', requestOptions);
        let serverResponse = await response.json();
        this.setState({
            userLoggedIn: serverResponse.userExist,
            error: !serverResponse.userExist,
            userId: serverResponse.userId
        }, () => {
            this.state.userLoggedIn ?
            (() => {
                localStorage.setItem("userId" , this.state.userId);
                this.props.logUserIn()
            })()
            :
            /* removing the error message after 3 seconds */
            this.setState({
                statusCode: 1
            }, () => {
                setTimeout( function(){
                    this.setState({
                        error: false,
                        statusCode: 0
                    })
                }.bind(this), 3000)
            })
        })
    }

    switchingLogin = () => {
        this.setState({
            logInPage: !this.state.logInPage
        })
    }

    /* function that checks if the username is available while new user
     signing up, that is, 
     it is not used before */
     handleSignUpUserName = async(x) => {
        /* making a POST request with the username entered by user on signing up */
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: x })
        };
        const response = await fetch('/checkUserName', requestOptions);
        let serverResponse = await response.json();
        let flag = serverResponse.userNameAvailable; 

        /* if user name is not available,
         it changed the state to false 
         else it changed it to true */
        !flag ?
        this.setState({
            uNameAvailable: false
        })
        :
        this.setState({
            uNameAvailable: true
        })
    }

    /* function that registers a new user to database */
    registerUser = async(x , y) => {
        /* making a post request to server with new user credentials */
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: x , password: y })
        };
        const response = await fetch('/signUpUser', requestOptions);
        let serverResponse = await response.json();

        /* if the user is successfully registered,
         takes user back to login page and
         displays success message */
        serverResponse.userRegistered && 
            this.setState({
                logInPage : !this.state.logInPage,
                error: true,
                statusCode: 2
            }, () => {
                /* hides success message after 3 seconds */
                setTimeout( function(){
                    this.setState({
                        error: false,
                        statusCode: 2
                    })
                }.bind(this), 3000)
            }) 
    }

    render(){
        return(
            <>
                {this.state.userLoggedIn ?
                <Redirect to={{
                        pathname : "/"
                        }} />
                :
                this.state.logInPage ?
                <LogIn switchingLogin = {this.switchingLogin} statusCode = {this.state.statusCode} error = {this.state.error} checkCredentials={this.checkCredentials} />
                :
                <SignUp uNameAvailable = {this.state.uNameAvailable} checkUserName = {this.handleSignUpUserName} switchingLogin = {this.switchingLogin} registerUser = {this.registerUser} />
                }
            </>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(LogInDisplay);