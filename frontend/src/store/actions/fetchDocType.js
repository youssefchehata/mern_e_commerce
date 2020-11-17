
import * as _A from "./actionTypes";
import Api from "../../apis/prise-de-commande";
import getToken from "./getToken";
import { getCache } from '../../apis/prise-de-commande';

export const fetchDocType = () => async (dispatch) => {
  const url = '/api/secured/commercial/all-documents-types'
  try {
    const headers = await getToken();
  const response = await Api.get(url,{headers} ); 
  dispatch({ type: _A.DOCUMENT_TYPE, payload: response.data.payload });

  } catch (error) {
    dispatch(await getCache(url, dispatch, _A.DOCUMENT_TYPE));
    dispatch({ type:"err fetch docType", payload:url
    //  payload:error={msg2:error.response.data.code,msg:error.response.data.message  }  
    });
  }
  
  

  };



