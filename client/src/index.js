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
import Store from './store/store.js'
import {Provider} from 'react-redux';

class App extends React.Component{
  render(){
    return(
      <Provider store = {Store}>
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
      </Provider>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

