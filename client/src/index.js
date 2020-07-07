import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Stylesheets/bootstrap.min.css';
import './Stylesheets/fontFace.css';
import './Stylesheets/reset.css';
import Home from './Components/Home/Home';
import LogInDisplay from './Components/logIn/LogInDisplay';
import WishList from './Components/user/WishList';
import UserProfile from './Components/user/UserProfile';
import Products from './Components/Home/Products';
import PageNotFound from './Components/PageNotFound';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path = "/" component = {Home} exact/>
          <Route path = "/login" component = {LogInDisplay} />
          <Route path = "/user/wishlist" component = {WishList} />
          <Route path = "/user" component = {UserProfile} exact/>
          <Route path = "/products" component = {Products} />
          <Route path = "*" component = {PageNotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

