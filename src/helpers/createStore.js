import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './../client/reducers';

export default () => {
    const defaultStore = {};
    const store = createStore(reducers, defaultStore, applyMiddleware(thunk));
    return store;
}