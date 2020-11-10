import { combineReducers } from 'redux';
import MainReducer from './MainReducer';
import RouterReducer from './RouterReducer';

const AllReducers = combineReducers({
	MainReducer: MainReducer,
	RouterReducer: RouterReducer
});

export default AllReducers;