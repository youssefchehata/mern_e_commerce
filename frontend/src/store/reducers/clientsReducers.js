import * as _A from '../actions/actionTypes';

const INITIAL_STATE = {
    clientsList: [],
    selectedClient:[],
    clientByIdClient: [],
};

export default (state = INITIAL_STATE, action) => {
  // console.log("category",state,action.payload);
  // return state
  switch (action.type) {
    case _A.ALL_CLIENTS_OF_COMMERCIAL:
      return { ...state, clientsList:action.payload };
      case _A.SELECTED_CLIENTS_BY_COMMERCIAL:
      return { ...state, selectedClient:action.payload };
      case _A.GET_CLIENT_OF_COMMERCIAL_BY_ID_CLIENT:
        return { ...state, clientByIdClient:action.payload };

    default:
      return state;
  }
};
