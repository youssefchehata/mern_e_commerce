import * as A from '../constants/productConstant';

export const productListReducer = (state = { products: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case A.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: payload };

    case A.PRODUCT_LIST_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case A.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case A.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: payload };

    case A.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.PRODUCT_DELETE_REQUEST:
      return { loading: true };

    case A.PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };

    case A.PRODUCT_DELETE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.PRODUCT_CREATE_REQUEST:
      return { loading: true };

    case A.PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: payload };

    case A.PRODUCT_CREATE_FAIL:
      return { loading: false, error: payload };

    case A.PRODUCT_CREATE_RESET:
      return {};

    default:
      return state;
  }
};


export const productUpdateReducer = (state = {product:{}}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.PRODUCT_UPDATE_REQUEST:
      return { loading: true };

    case A.PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: payload };

    case A.PRODUCT_UPDATE_FAIL:
      return { loading: false, error: payload };

    case A.PRODUCT_UPDATE_RESET:
      return {product:{}};

    default:
      return state;
  }
};