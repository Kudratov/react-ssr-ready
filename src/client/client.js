import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {renderRoutes} from 'react-router-config';
import axios from 'axios';

import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
    baseURL: '/api'
});

const DefaultStore = window.INITIAL_STATE;
const store = createStore(reducers, DefaultStore, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

console.log(store.getState());

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector("#root"));