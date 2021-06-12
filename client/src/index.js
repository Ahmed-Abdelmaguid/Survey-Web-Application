//redux
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
//provider is a component that makes the store accessible to every component in the app
import { createStore, applyMiddleware } from 'redux';
//store contains all components and is connceted to our react side
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';


import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
//created a redux store at the top level of our application first arguments contains all the reducers, second argument initial state of my application 


ReactDom.render(
<Provider store={store}><App /></Provider>, 
document.querySelector('#root'));
//first instance a jsx thats why we need <> we hooked up our store to the react side by placing the provider tag (proivder tag is a react component that knows hw to read changes from the redux store any time the redux store gets a new some new state the provider will inforem all its childerns componets that a new state is availabe and update all those new components wiht the new state   ) , for the second argument refrence for a dom node inside of my html document
