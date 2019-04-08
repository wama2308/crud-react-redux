import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './postReducer';

const mainReducer = combineReducers({posts:postReducer});

export default createStore(mainReducer,applyMiddleware(thunk));