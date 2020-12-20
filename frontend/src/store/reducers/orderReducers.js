import * as A from '../constants/orderConstant';

export const orderCreateReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        
      case A.ORDER_CREATE_REQUEST:
        return { loading: true };

      case A.ORDER_CREATE_SUCCESS:
        return { loading: false,success:true ,order: payload };

      case A.ORDER_CREATE_FAIL:
        return { loading: false, error: payload };
  
      default:
        return state;
    }
  };