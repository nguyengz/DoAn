// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import auth from './authSlice';
import users from './userSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ auth, users, menu });

export default reducers;
