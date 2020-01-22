import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import dataReducer from './dataReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers ({
	data: dataReducer,
	form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;