import React from 'react';
import '../../Stylesheets/login/login.css';
import { Link } from 'react-router-dom';
// import LogInArt from '../../Images/loginArt.jpg'

const errorMessage = ["" , "Invalid Username or password", "Account successfully created"]

class LogIn extends React.Component{
    state = {
        username: "",
        password: "",
        logInError: false,
        logInErrorMessage: ""
    }

    handleUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.username.trim() !== "" ?
            this.state.password.trim() !== "" ?
             (() => {
                // this.props.checkCredentials(this.state.username, this.state.password);
                this.setState({
                    username: "",
                    password: ""
                })
             })()
             :
             this.setState({
                 logInError: true,
                 logInErrorMessage: "Password field cannot be empty"
             }, () => {
                setTimeout( function(){
                    this.setState({
                        logInError: false,
                        logInErrorMessage: ""
                    })
                }.bind(this), 2000)
            })
             :
             this.setState({
                logInError: true,
                logInErrorMessage: "Username field cannot be empty"
            }, () => {
                setTimeout( function(){
                    this.setState({
                        logInError: false,
                        logInErrorMessage: ""
                    })
                }.bind(this), 3000)
            })
             
    }
    mountStyle = () => {
        document.querySelector('.login-art-container').style.width = "100%"
    }

    componentDidMount(){
        setTimeout(this.mountStyle, 10) 
    }

    render(){
        return(
            <div className="log-in d-flex align-items-center">
                <Link to = "/">
                    <span title="back home" className="close-portal">
                        &#10006;
                    </span>
                </Link>

                <div className="col-8 p-0">
                    <div className="login-art-container"></div>
                </div>

                <div className="col-4 p-0">
                    <div className="log-in-container d-flex flex-column justify-content-center w-100 my-0 mx-auto p-5">
                        {this.state.logInError &&
                            <div className="log-in-error d-flex p-1 justify-content-center">
                                {this.state.logInErrorMessage}
                            </div>
                        }
                        {this.props.error &&
                            <div className="log-in-error d-flex p-1 justify-content-center" style = {{ backgroundColor: `${this.props.statusCode === 2 ? "rgba(34,139,34,0.85)" : ""}` }} >
                                {errorMessage[this.props.statusCode]}
                            </div>
                        }
                        <form className="d-flex flex-column align-items-center w-100 mx-auto" onSubmit={this.handleSubmit}>
                            <h2 className="mr-auto mb-3"> Log In to Enigma</h2>

                            <span className="d-flex flex-column w-100 mb-4">
                                Username:
                                <input className="py-1 pl-0 pr-1" type="text" placeholder="User Name here" value={this.state.username} onChange={this.handleUserName} />
                            </span>

                            <span className="d-flex flex-column w-100 mb-4">
                                Password:
                                <input className="py-1 pl-0 pr-1" type="password" placeholder="Password here" value={this.state.password} onChange={this.handlePassword} />
                            </span>

                            <input className="mr-auto mb-4 w-50 px-2 py-1 submit-button" type="submit" value="Log In" />
                            <span className="sign-up-message"> Don't have an account? <strong onClick={this.props.switchingLogin}>Click here </strong>to SignUp</span>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn;

// {this.props.error &&
//     <div className="log-in-error d-flex p-1 justify-content-center">
//         Invalid Login Credentials
//     </div>
//     }
//     {
//     {this.props.hoverMenu &&
//         <div className="message-container d-flex justify-content-center p-1">
//                 <p>Account sucessfully created, log in with your credentials</p>
//         </div>
//     }