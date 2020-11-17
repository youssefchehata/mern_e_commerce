import * as _A from '../actions/actionTypes';

const INITIAL_STATE = {
    documentType:[],
};

export default (state = INITIAL_STATE, action) => {

    const { type, payload } = action;
    switch (type) {
    case _A.DOCUMENT_TYPE:
      return { ...state, documentType:payload };



    default:
      return state;
  }
};
