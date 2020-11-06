import * as _A from '../actions/actionTypes';


const INITIAL_STATE = {
    AllProducts: [{ external_id: '1', price: 'Some_articles_Name' },],
        
           
      filtredProducts:[
        // { external_id: '1', price: 'Some_articles_price' },
],
      text:'',
      categoryId:'',
      detailsProduct:[],
      spinner:true

  
};

export default (state = INITIAL_STATE, action) => {
  // console.log("products",state,action.payload);
  const { type, payload } = action;
  // return state
  switch (type) {

    case _A.FETCH_ALL_PRODUCTS:
      return { ...state,spinner:false, AllProducts:payload,filtredProducts:payload ,};

    case _A.FETCH_ALL_PRODUCTS_OF_A_CATEGORY_CLIENTS:
        return { ...state, AllProducts:payload,filtredProducts:payload };

        case _A.FETCH_PRODUCTS_BY_CATEGORY_OF_PRODUCT:
          return { ...state,spinner:false,AllProducts:payload ,filtredProducts:payload};
        

      case _A.SEARCH_INPUT:
        return {...state,filtredProducts:payload.AllProducts, text:payload.text}




      case _A.FILTER_ALL_PRODUCTS_BY_CATIGORIE:
        return {...state,filtredProducts:payload.AllProducts, category:payload.category}

      case _A.GET_SINGLE_PRODUCT:
        return {...state,detailsProduct:payload,}

    default:
      return state;
  }
};
