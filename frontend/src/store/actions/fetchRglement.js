import {  Alert } from 'react-native';
import * as _A from "./actionTypes";
import Api from "../../apis/prise-de-commande";
import  AsyncStorage  from '@react-native-community/async-storage';



export const get_all_reglements = () => async (dispatch) => {
       
  try {
const token = await AsyncStorage.getItem('token');
const headers = await {Authorization: `Bearer ${token}`};

const response = await Api.get(`/api/secured/commercial/reglements`,{headers} ); 
    dispatch({ type: _A.ALL_REGLEMENTS_OF_COMMERCIAL,  payload:response.data.payload  });
} catch (error) {
  dispatch({ type:"err get_all_reglements",  payload:error  });
}
};



export const Get_reglement_By_id = (id_reglement=1) => async (dispatch) => {
       
  try {
const token = await AsyncStorage.getItem('token');
const headers = await {Authorization: `Bearer ${token}`};

const response = await Api.get(`/api/secured/commercial/reglement/${id_reglement}`,{headers} ); 
    dispatch({ type: _A.ID_REGLEMENT,  payload:response.data.payload  });
   
} catch (error) {
    dispatch({ type:"err Get_reglement_By_id",  payload:error  });
    Alert.alert('Error', 'Get_reglement_By_id', [{ text: 'Okay' }]) 
}
};
