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
export const productDetailsReducer = (state = { product:{reviews:[]} }, action) => {
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