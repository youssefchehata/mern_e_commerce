import * as _A from '../actions/actionTypes';

const INITIAL_STATE = {
    AllCategory: [],
    childCategory:[],
    subchildone:[],
    subchildtow:[],
    subchildthree:[],


  
  
};

export default (state = INITIAL_STATE, action) => {
  // console.log("category",state,action.payload);
  // return state
  const { type, payload } = action;
  switch (type) {
    case _A.FETCH_ALL_CATEGORY:
      return { ...state, AllCategory:payload ,childCategory:[],subchildone:[],subchildtow:[], subchildthree:[], };
   
    case _A.GET_SUB_CHILD_CATG_ONE:
      return { ...state, childCategory:payload,subchildone:[],subchildtow:[], subchildthree:[],};

      case _A.GET_SUB_CHILD_CATG_TOW:
        return { ...state, subchildone:payload ,subchildtow:[], subchildthree:[],};

        case _A.GET_SUB_CHILD_CATG_THREE:
          return { ...state, subchildtow:payload , subchildthree:[],};

          case _A.GET_SUB_CHILD_CATG_FOUR:
            return { ...state, subchildthree:payload };
        
          
        
    default:
      return state;
  }
};
