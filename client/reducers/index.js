import { combineReducers } from 'redux';
import requestReducer from './requestReducer'

/**
 * root reducer - contains all the reducers
 *
 * @param  {object} state the initial state
 *
 * @param  {object} action the action
 *
 */
const reducers = combineReducers({
    request: requestReducer
});

export default reducers;
