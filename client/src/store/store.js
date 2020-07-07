import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer.js'
// import thunk from 'redux-thunk';

// const middleware = [thunk];

const Store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;