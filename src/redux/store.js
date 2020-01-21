import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import dataReducer from './dataReducer';
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers ({
	data: dataReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;