import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from './../client/reducers';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: {cookei: req.get('cookie') || ''}
    })
    const defaultStore = {};
    const store = createStore(reducers, defaultStore, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
    return store;
}