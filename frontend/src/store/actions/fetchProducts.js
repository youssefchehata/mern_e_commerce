import * as _A from "./actionTypes";
import Api from "../../apis/prise-de-commande";
import  AsyncStorage  from '@react-native-community/async-storage';
import {alert} from './alert'
import {SPINNER_LOADING} from "./spinnerLoading"
import getToken from "./getToken";
import {getCache} from './getCache';


export const fetchAllProduct = () => async (dispatch) => {
  dispatch(SPINNER_LOADING(true))
  const url='/api/secured/commercial/products/all'
  try {
    const headers = await getToken();
  
  const response = await Api.get(url,{headers} ); 
  

  dispatch(SPINNER_LOADING(false))&& dispatch({ type: _A.FETCH_ALL_PRODUCTS, payload:response.data.payload }) 
  
   
  } catch (error) {
    dispatch(SPINNER_LOADING(false))  && dispatch(getCache(url, dispatch,_A.FETCH_ALL_PRODUCTS))
   
    const aler= alert("something wrong","You are OFF_LINE","Refresh",)
    dispatch({ type:"err FETCH_ALL_PRODUCTS",  payload:error={msg2:error.response.data.code,msg:error.response.data.message , } ,aler});
   }



   
  }


//Get_All_Products_of_a_category_client
export const Get_All_Products_of_a_category_client = (clientTypeId) => async (dispatch) => {
  const url = `/api/secured/commercial/products/all/${clientTypeId}`
  dispatch(SPINNER_LOADING(true))
  try {
const token = await AsyncStorage.getItem('token');
const headers = await {Authorization: `Bearer ${token}`};
const response = await Api.get(url,{headers} ); 
dispatch(SPINNER_LOADING(false))&&  dispatch({ type: _A.FETCH_ALL_PRODUCTS_OF_A_CATEGORY_CLIENTS,  payload:response.data.payload  });
   
} catch (error) { 
  dispatch(SPINNER_LOADING(false))&& dispatch(getCache(url, dispatch,_A.FETCH_ALL_PRODUCTS_OF_A_CATEGORY_CLIENTS))
  
  dispatch({ type:"err FETCH_ALL_PRODUCTS_OF_A_CATEGORY_CLIENTS",  payload:error={msg2:error.response.data.code,msg:error.response.data.message  } }); }

};

//Get_Products_BY_category_OF_PRODUCT


export const productsByCategoryOfProducts = (idCategory,callback) => async (dispatch) => {
  const url = `/api/secured/commercial/products/${idCategory}/all-products`

  dispatch(SPINNER_LOADING(true))
  try {
const token = await AsyncStorage.getItem('token');
const headers = await {Authorization: `Bearer ${token}`};

const response = await Api.get(url,{headers} ); 
//console.log(response,'resss');

// if(!response){
//   return (
//     console.log('tooooo'),
//     dispatch(SPINNER_LOADING(false)),
//     dispatch({ type: _A.FETCH_PRODUCTS_BY_CATEGORY_OF_PRODUCT,  payload:response.data.payload  }),
//     callback()
//   )
// }
// (console.log('hhhhhhhone'))
  dispatch(SPINNER_LOADING(false))
  dispatch({ type: _A.FETCH_PRODUCTS_BY_CATEGORY_OF_PRODUCT,  payload:response.data.payload  });
  callback()
  
} catch (error) {
  dispatch(SPINNER_LOADING(false))
  dispatch(await getCache(url, dispatch,_A.FETCH_PRODUCTS_BY_CATEGORY_OF_PRODUCT))
  
  dispatch({ type:"err products_ByCategory_Of_Products",
    // payload:error={msg2:error.response.data.code,msg:error.response.data.message  } 
  }); 
  }

};

export const fetchDetailsProductByid = (id) => async  dispatch => {
      const url =`/api/secured/commercial/products/single_product/${id}`
  try {
   const token = await AsyncStorage.getItem('token');
   const headers = await {Authorization: `Bearer ${token}`};
   const response = await Api.get(url,{headers} ); 
   dispatch({ type: _A.GET_SINGLE_PRODUCT,  payload:response.data.payload  });
  } catch (error) {
    dispatch(await getCache(url, dispatch,_A.GET_SINGLE_PRODUCT));
    dispatch({ type:"err GET_SINGLE_PRODUCT",  payload:error={msg2:error.response.data.code,msg:error.response.data.message  } }); }
      };
     


  export const searchInput = (text,filtred,all) =>  dispatch => {
    
    try {
       //  const search= text ===''? all :filtred.filter((el,i)=>{return el.original_title.toLowerCase().indexOf(text)>-1})
       
      const search= text ===''? all :filtred.filter((el,i)=>{return el.ar_design.toString().toLowerCase().includes(text.trim())})
              dispatch({ type: _A.SEARCH_INPUT, payload:{ text, AllProducts:search } });
             
    } catch (err) {
      
      dispatch({ type:"err searchInput",  },)
    }
   
     };





     export const filterProductByCategory = (category,products,All) =>  dispatch => {
      // console.log('category',category)
      // console.log('products',products)
      // console.log('all',All)
      // const filtred= category ===''? All :products.filter(a=>a.title.toString().indexOf(category.toUpperCase())>=0)
      // return  dispatch({ type: FILTER_ALL_PRODUCTS_BY_CATIGORIE, payload:{ category, AllProducts:filtred } });
       };


