import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger({
collapsed:true
});
const store = createStore(reducer, undefined, composeWithDevTools(applyMiddleware(thunk,logger)));

export default store;