import * as _A from '../actions/actionTypes';

export default (state = Boolean, action) => {
  // console.log("shoplist",state,action.payload);
  // return state
  const { type, payload } = action;

  switch (type) {
    case _A.SPINNER_LOADING:
      return { ...state, loading:payload };

    default:
      return state;
  }
};
