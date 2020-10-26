import { 
    GET_REQUESTS, 
    GET_REQUESTS_ERROR, 
    LOAD_IPHONES,  
    LOAD_IPHONES_ERROR
} from '../actions/requestActions';

const INITIAL_STATE = {
  requests: [],
};

/**
 * reducer - contains the reducer
 *
 * @param  {object} state the initial state
 *
 * @param  {object} action the action
 *
 * @return {Object} returns an Object
 *
 */
const requestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    case GET_REQUESTS_ERROR:
      return {
        ...state,
        requestError: action.payload,
      };
      case LOAD_IPHONES:
      return {
        ...state,
        loadiPhoneRes: action.payload,
      };
    case LOAD_IPHONES_ERROR:
      return {
        ...state,
        loadiPhoneError: action.payload,
      };
    default:
      return state;
  }
};

export default requestReducer;
