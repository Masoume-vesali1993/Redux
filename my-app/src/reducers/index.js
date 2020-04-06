import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combinReducers, combineReducers} from 'redux';

const allReducers = combineReducers({
    conter: counterReducer,
    isLogged: loggedReducer
})