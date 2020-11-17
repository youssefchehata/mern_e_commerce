import * as _A from './actionTypes';
import Api from '../../apis/prise-de-commande';
import AsyncStorage from '@react-native-community/async-storage';
import { getCache } from './getCache';
// import headers from './token'

export const fetchCurrentClientType = () => async (dispatch) => {
  const url = '/api/secured/commercial/client';
  try {
    const token = await AsyncStorage.getItem('token');
    const headers = await { Authorization: `Bearer ${token}` };
    const response = await Api.get(url, { headers });
    dispatch({ type: _A.CURRENT_CLIENT, payload: response.data.payload });
  } catch (error) {
    dispatch(await getCache(url, dispatch, _A.CURRENT_CLIENT))
   dispatch({ type: 'err fetchCurrentClientType', payload:error={msg2:error.response.data.code,msg:error.response.data.message  } }); }
};

export const clearCurrentClientType = () => async (dispatch) => {
  try {
    dispatch({ type: _A.CLEAR_CURRENT_CLIENT });
  } catch (error) {
    dispatch({ type: 'err ClearCurrentClientType' });
  }
};
