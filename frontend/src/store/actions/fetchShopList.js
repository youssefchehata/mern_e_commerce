import * as _A from "./actionTypes";
import * as _S from './spinnerLoading'
import {  Alert } from 'react-native';
import Api from "../../apis/prise-de-commande";
import getToken from "./getToken";
import {alert} from "./alert";
import {getCache} from "./getCache";
import  AsyncStorage  from '@react-native-community/async-storage';
import {navigate} from '../../navigation/NavigationRef'



export const colisage = (QTColisage,idcolisage) => async (dispatch) => {
try {
  const x={QTColisage,idcolisage}
  if(x==={})return null
  else   dispatch({ type: _A.GET_ALL_ABOUT_COLISAGE_BY_CURRENT_CLIENT, payload:x });
} catch (error) {
     dispatch({ type:"err GET_ALL_ABOUT_COLISAGE_BY_CURRENT_CLIENT"  });
}
};
export const quantité = (QT,id) => async (dispatch) => {
  try {
    const x={QT,id}
    if(x==={})return null
    else   dispatch({ type: _A.QTE_CHOOSE_TO_BASQUET, payload:x });
  } catch (error) {
       dispatch({ type:"err QTE_CHOOSE_TO_BASQUET"  });
  }
  };
  
  export const increment = () => async (dispatch) => {
    try { dispatch({ type: _A.QTE_INCREMENT });
    } catch (error) {
         dispatch({ type:"err QTE_INCREMENT"  });
    }
    };
    
  export const decrement = () => async (dispatch) => {
    try { dispatch({ type: _A.QTE_DECREMENT });
    } catch (error) {
         dispatch({ type:"err QTE_DECREMENT"  });
    }
    };
  
export const addToShopList = (item,list,coli,qt_pc,idDoctype,currentClientId) => async (dispatch) => {
  

      ar_ref      =  item?.ar_ref                ;
      
      do_type     = idDoctype                ;
  
      qte_piece   =  coli.QTColisage * qt_pc.QT;
   
      remise      = 0                                ;
      ct_num      =  currentClientId            ;
     
      EU_Enumere  =  coli?.idcolisage        ;
     
      qte_colisee = qte_piece/ coli?.QTColisage        ;
    try { 
      
          const All_List =[...list,{...item, do_type, ar_ref, qte_piece, qte_colisee, remise, ct_num, EU_Enumere }]
          const removeDuplicateObjInArray = [];
    All_List.map(x => removeDuplicateObjInArray.filter(a => a.external_id == x.external_id && a.id == x.id).length > 0 ? null : removeDuplicateObjInArray.push(x));
    const alert =Alert.alert('produit au panier', 'success', [{ text: 'Okay' }])
      
      dispatch({ type: _A.ADD_PRODUCT_TO_SHOP_LIST, payload:{shoppingBasket:removeDuplicateObjInArray},alert });
  } catch (error) { dispatch({ type:"err ADD_PRODUCT_TO_SHOP_LIST",   }); }
};

export const deleteItemBasket = (list,id) => async (dispatch) => {

  try {

    const alertdelete =alert('delete Button', 'delete product',"close")
       dispatch({ type: _A.DELETE_PRODUCT_FROM_SHOP_LIST,payload:list.filter(c=>c.id !==id),alertdelete });

  } catch (error) {
       dispatch({ type:"err DELETE_PRODUCT_FROM_SHOP_LIST"  });
  }
  };

  // const currentClientId= clientType?.n_cat_tarif?.external_id
  // const docType=documentType.find(el=>el.name==="Bon de commande").external_id
export const submit_cmd = (lignes,documentType,clientType) => async (dispatch) => {

  // const lignes=[...list.map(el=>el)]
  // const lignes=[...list]

  const x= { do_type:documentType,do_piece:1, ct_num:clientType, }

  try {

    const  data  = {...x,lignes }

    const token = await AsyncStorage.getItem('token');
   const headers =  {Authorization: `Bearer ${token}`};

    await Api.post(`/api/secured/commercial/submit-commande`,data,{headers},); 
    
    const alert =Alert.alert('commande envoyer', 'commande envoyer', [{ text: 'Okay' }])
    
    dispatch({ type: _A.SUBMIT_COMMANDE, payload:{shoppingBasket:[]}, alert });
} catch (error) {
  // alert(JSON.stringify(error));
  const a =Alert.alert( `Error:${error.response.data.code}`, error.response.data.message, [{ text: 'Okay' }])
  dispatch({ type:"err submit_cmd", payload:error={msg2:error.response.data.code,msg:error.response.data.message  } ,a });
  navigate('LoadingScreen')
  
}
};

// ****************************************************************************

export const all_purchases = () => async (dispatch) => {
  dispatch(_S.SPINNER_LOADING(true))
  const url='/api/secured/commercial/all-purchases'
  try {
    const headers = await getToken();
    const response = await Api.get(url,{headers} ); 
    dispatch({ type: _A.ALL_PURCHASES, payload: response.data.payload.reverse() });
    dispatch(_S.SPINNER_LOADING(false))
} catch (error) {
  dispatch(_S.SPINNER_LOADING(false))
  dispatch(await getCache(url, dispatch, _A.ALL_PURCHASES_OF_A_CLIENT));
  dispatch({ type:"err all_purchases",  payload:error={msg2:error.response.data.code,msg:error.response.data.message  }  });
}
};

export const all_purchases_of_client = (clientId) => async (dispatch) => {
  dispatch(_S.SPINNER_LOADING(true))
  const url=`/api/secured/commercial/all-purchases/${clientId}`
  try {
  
    const headers = await getToken();
    const response = await Api.get(url,{headers} ); 
    dispatch({ type: _A.ALL_PURCHASES_OF_A_CLIENT, payload: response.data.payload.reverse() });
    dispatch(_S.SPINNER_LOADING(false))
} catch (error) {
  dispatch(_S.SPINNER_LOADING(false))
  dispatch(await getCache(url, dispatch, _A.ALL_PURCHASES_OF_A_CLIENT));
  
  dispatch({ type:"err all_purchases_of_client",
    // payload:error={msg2:error.response.data.code,msg:error.response.data.message  } 
   });
}
};

export const single_purchase = (id) => async (dispatch) => {
const url =`/api/secured/commercial/single-purchase/${id}`
       
  try {
    const headers = await getToken();
    const response = await Api.get(url,{headers} ); 
    dispatch({ type: _A.SINGLE_PURCHASES_BY_ID, payload:response.data.payload });
    

} catch (error) {
   dispatch(await getCache(url, dispatch, _A.SINGLE_PURCHASES_BY_ID));
   dispatch({ type:"err single_purchase", 
    // payload:error={msg2:error.response.data.code,msg:error.response.data.message  } 
   });
}
};

export const clear_single_purchase = () => async (dispatch) => {

     dispatch({ type: 'clear_single_purchase' });

};



// const data =await {
//   do_type: 1,
//   do_piece: 1,
//   ct_num: 1,
//   lignes: [
//   {
//   do_type:1,
//   ar_ref: "1001010101",
//   qte_piece: 24,
//   qte_colisee:1,
//   remise: 0,
//   ct_num: 0,
//   EU_Enumere: 1
//   }
//   ]
//   }






