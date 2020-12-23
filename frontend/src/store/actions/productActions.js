import axios from 'axios';
import * as A from '../constants/productConstant';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: A.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/products');
    dispatch({ type: A.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: A.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: A.PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: A.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: A.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: A.PRODUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        // Content_Type: 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/products/${id}`, config);

    dispatch({ type: A.PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: A.PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
