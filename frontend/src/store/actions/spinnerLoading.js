
import * as _A from "./actionTypes";
export const SPINNER_LOADING = (bool) => async (dispatch) => {
  try {
  
  dispatch({ type: _A.SPINNER_LOADING, payload:bool});

  } catch (error) {
    dispatch({ type:"err SPINNER_LOADING",});
  }
  
  

  };
