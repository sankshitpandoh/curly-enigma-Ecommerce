import React from 'react';
import '../../Stylesheets/login/signUp.css';

// import '../../stylesheets/login/signUp.css';

class SignUp extends React.Component{
    state={
        username: "",
        password: "",
        rePassword: "",
        disabled: true,
        pMatch: true,
    }

    handleUserName = (e) =>{
        this.setState({
            username: e.target.value
        })
    }

    /* Function that is triggered when the user defocuses the username input field */
    deFocused = () =>{
        /* sends the value of input field to checkusername to check if it is available */
        this.props.checkUserName(this.state.username)
    }


    /* Takes an input of  password field, 
    sets password state to the value and 
    passes it to check password function */
    handlePassword = (e) => {
        this.setState({
            password : e.target.value
        }, () => {
            this.checkPasswords()
        })
    }

    /* Takes an input of  re-password field, 
    sets rePassword state to the value and 
    passes it to check password function */
    handleRePassword = (e) => {
        this.setState({
            rePassword : e.target.value
        },() => {
            this.checkPasswords()
        })
    }

    /* checks if the passwords match and then actives the submit button */
    checkPasswords = () => {
        this.state.password === this.state.rePassword ?
        this.setState({
            disabled: false,
            pMatch: true
        })
        :
        this.setState({
            disabled: true,
            pMatch: false
        })
    }

    /* function that send the user input data to register user function */
    signUp = () => {
        this.state.username.trim() !== "" &&
        this.state.password.trim() !== "" && 
        this.state.rePassword.trim() !== "" &&
        this.props.registerUser(this.state.username, this.state.password);
    }

    mountStyle = () => {
        document.querySelector('.signup-art-container').style.width = "100%"
    }

    componentDidMount(){
        setTimeout(this.mountStyle, 10) 
    }

    render(){
        return(
            <div className="sign-up d-flex align-items-center">
                <div className="col-8 p-0">
                    <div className="signup-art-container"></div>
                </div>
                <div className="col-4 p-0">
                    <div className="sign-up-container d-flex flex-column justify-content-center w-100 my-0 mx-auto p-5">
                        <div className="d-flex flex-column w-100 mx-auto">
                        <h2 className="mr-auto mb-3">Sign up to Enigma</h2>
                    <span className="mb-3 d-flex flex-column">
                        Enter a Username: {!this.props.uNameAvailable && <p>username not available</p>}
                        <input className="py-1 pl-0 pr-1" type="text" style = {{ borderBottom: `${!this.props.uNameAvailable ? "2px solid red" : ""}` }} value= {this.state.username} onChange={this.handleUserName} placeholder="Enter User name here" onBlur={this.deFocused} />
                    </span>
                    <span className="mb-3 d-flex flex-column">
                        Enter Password:
                        <input className="py-1 pl-0 pr-1" type="password" value= {this.state.password} onChange={this.handlePassword} placeholder="Enter password here" />
                    </span>
                    <span className="mb-3 d-flex flex-column">
                        Re-Enter Password: {!this.state.pMatch && <p>Passwords don't match</p>}
                        <input className="py-1 pl-0 pr-1" type="password" style = {{ borderBottom: `${!this.state.pMatch ? "2px solid red" : ""}` }} value= {this.state.rePassword} onChange={this.handleRePassword} placeholder="Re-type you password here" />
                    </span>
                    <button className="mr-auto mb-4 w-50 px-2 py-1" disabled={this.state.disabled || !this.props.uNameAvailable} onClick={this.signUp}>Sign Up</button>
                    <p>Already have an account? <strong onClick={this.props.switchingLogin}>Click here</strong> to Log In </p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default SignUp