import * as ACTION_TYPE from '../actions/actionTypes';

const INITIAL_STATE = {
    currentClientType:[],
   

  
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ACTION_TYPE.CURRENT_CLIENT:
      return { ...state, currentClientType:action.payload };
      case ACTION_TYPE.CLEAR_CURRENT_CLIENT:
        return { ...state, currentClientType:[] };


    default:
      return state;
  }
};
