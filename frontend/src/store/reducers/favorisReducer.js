import * as _A from '../actions/actionTypes';

const INITIAL_STATE = {
    fav:[ ],
};

export default (state = INITIAL_STATE, action) => {

    const { type, payload } = action;
    switch (type) {
        case _A.ALL_FAVORIS:
            return { ...state, fav:payload };
            case _A.ADD_FAVORIS:
                return { ...state, fav:payload };
                case _A.DELETE_FAVORIS:
                    return { ...state, fav:payload };

      
      



    default:
      return state;
  }
};
