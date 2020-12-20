import axios from 'axios';
import * as A from '../constants/orderConstant';

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: A.ORDER_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Content_Type: 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch({ type: A.ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: A.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
