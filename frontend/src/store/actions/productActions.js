import axios from 'axios'
import * as A from '../constants/productConstant'

export const listProducts = (selectedClient) => async (dispatch) => {
       
    try {
  
  
      dispatch({ type: A.PRODUCT_LIST_REQUEST  });
      const {data }= await axios.get('/api/products')
      dispatch({ type:A.PRODUCT_LIST_SUCCESS, payload:data })


  } catch (error) {
    dispatch({ type:A.PRODUCT_LIST_FAIL ,  payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
     });
  }
  };