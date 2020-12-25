import * as A from '../constants/orderConstant';

export const orderCreateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.ORDER_CREATE_REQUEST:
      return { loading: true };

    case A.ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: payload };

    case A.ORDER_CREATE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case A.ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case A.ORDER_DETAILS_SUCCESS:
      return { loading: false, order: payload };

    case A.ORDER_DETAILS_SUCCESS:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.ORDER_PAY_REQUEST:
      return { loading: true };

    case A.ORDER_PAY_SUCCESS:
      return { loading: false, success: true };

    case A.ORDER_PAY_FAIL:
      return { loading: false, error: payload };
    case A.ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};


export const orderListMyReducer = (state = {orders:[]}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.ORDER_LIST_MY_REQUEST:
      return { loading: true };

    case A.ORDER_LIST_MY_SUCCESS:
      return { loading: false, orders: payload };

    case A.ORDER_LIST_MY_FAIL:
      return { loading: false, error: payload };
      case A.ORDER_LIST_MY_RESET:
        return {orders:[] };

    default:
      return state;
  }
};


export const orderListReducer = (state = {orders:[]}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.ORDER_LIST_REQUEST:
      return { loading: true };

    case A.ORDER_LIST_SUCCESS:
      return { loading: false, orders: payload };

    case A.ORDER_LIST_FAIL:
      return { loading: false, error: payload };


    default:
      return state;
  }
};