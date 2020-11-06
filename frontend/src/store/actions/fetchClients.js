import {  Alert } from 'react-native';
import * as _A from "./actionTypes";
import Api from "../../apis/prise-de-commande";
import  AsyncStorage  from '@react-native-community/async-storage';
import {getCache} from '../../apis/prise-de-commande'


export const Get_Client_Of_Commercial = () => async (dispatch) => {
       const url = `/api/secured/commercial/clients`
  try {
const token = await AsyncStorage.getItem('token');
const headers = await {Authorization: `Bearer ${token}`};

const response = await Api.get(url,{headers} ); 

    dispatch({ type: _A.ALL_CLIENTS_OF_COMMERCIAL,  payload:response.data.payload  });
} catch (error) {
  dispatch(await getCache(url, dispatch, _A.ALL_CLIENTS_OF_COMMERCIAL));
  dispatch({ type:"err Get_Client_Of_Commercial",  payload:error  });
}
};

export const Selected_Client_by_Commercial = (selectedClient) => async (dispatch) => {
       
  try {


    dispatch({ type: _A.SELECTED_CLIENTS_BY_COMMERCIAL,  payload:selectedClient  });
} catch (error) {
  dispatch({ type:"ERR SELECTED_CLIENTS_BY_COMMERCIAL",  payload:error  });
}
};



export const Get_Client_Of_Commercial_by_clientId = (id_client=2) => async (dispatch) => {
       
  try {
const token = await AsyncStorage.getItem('token');
const headers = await {Authorization: `Bearer ${token}`};

const response = await Api.get(`/api/secured/commercial/single-purchase/${id_client}`,{headers} ); 
    dispatch({ type: _A.GET_CLIENT_OF_COMMERCIAL_BY_ID_CLIENT,  payload:response.data.payload  });
   
} catch (error) {
  dispatch({ type:"err Get_Client_Of_Commercial_by_clientId",  payload:error  });
  Alert.alert('Error', 'check Get_Client_Of_Commercial_by_clientId', [{ text: 'Okay' }]) }
};
