import * as _A from '../actions/actionTypes';

const INITIAL_STATE = {
    AllReglement: [ { id: '1', name: 'reglement-1-' }, { id: '2', name: 'reglement-2-' }, ],
    reglementByid: [ { id: '1', name: 'idreglement-1-' } ],
};

export default (state = INITIAL_STATE, action) => {
  // console.log("category",state,action.payload);
  // return state
  switch (action.type) {
    case _A.ALL_REGLEMENTS_OF_COMMERCIAL:
      return { ...state, AllReglement:action.payload };
      case _A.ID_REGLEMENT:
        return { ...state, reglementByid:action.payload };

    default:
      return state;
  }
};
