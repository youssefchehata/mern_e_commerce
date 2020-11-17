import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, SIGNUP_USER_SUCCESS, SIGNOUT_USER, ADD_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE ,REFRESH_TOKEN} from './actionTypes';
import {  Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Api from '../../apis/prise-de-commande';
import { navigate } from './../../navigation/NavigationRef';
import {fetchCurrentClientType,clearCurrentClientType} from './fetchCurrentClient'

export const emailChanged = username => async dispatch => {
  dispatch({ type: EMAIL_CHANGED, payload: username });
};
export const passwordChanged = password => async dispatch => {
  dispatch({ type: PASSWORD_CHANGED, payload: password });
};


export const signin = (username, password ,callback) => async dispatch => {
  try {
    const res = await Api.post('/api/commercial/security/login-check',{username, password} );
       await AsyncStorage.setItem('token', res.data.token);
       await AsyncStorage.setItem('refreshToken', res.data.refreshToken);

    dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.token });
    dispatch(fetchCurrentClientType())
    // navigate('CategoryList');
    navigate('chooseClientType');
    
        // callback();
  } catch (error) {
   // payload:error={msg2:error.response.data.code,msg:error.response.data.message ,alert }
    const alert =Alert.alert('Error', 'check your email/password', [{ text: 'Okay' }])
    dispatch({ type: ADD_ERROR_MESSAGE, alert  });
  }

};


export const clearErrorMessage = () => {
  
  return { type: CLEAR_ERROR_MESSAGE, payload: '' };
  };


export const AutomaticSignIn = (callback) =>async dispatch => {
  
  const token = await AsyncStorage.getItem('token');
  if(token) {
     dispatch({ type: LOGIN_USER_SUCCESS, payload:token })
     dispatch(fetchCurrentClientType());
      navigate('chooseClientType')
    //  navigate('CategoryList')
}else{
  navigate('Login')
}
};


export const Refreshtoken = () => async dispatch => {

  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const res = await Api.post('/api/commercial/security/token/refresh',{refreshToken} );
     await   AsyncStorage.setItem('token', res.data.token)
     await   AsyncStorage.setItem('refreshToken', res.data.refreshToken)
    dispatch({ type: REFRESH_TOKEN, payload: res.data.token});
     dispatch(fetchCurrentClientType());
    //  navigate('chooseClientType')
  } catch (error) {
    dispatch(signout())
    dispatch({ type: 'err refresh token',  payload:error={msg2:error.response.data.code,msg:error.response.data.message ,alert }  });
  }

};

export const signout  = () =>async dispatch => {
 await AsyncStorage.removeItem('token');
 dispatch ({ type: SIGNOUT_USER, })
 dispatch (await clearCurrentClientType())
 await   AsyncStorage.removeItem('cache/api/secured/commercial/client');
 navigate('Login')
};


export const signupUser = (username, password) => async dispatch => {
 
  try {
    const res = await Api.post('/api/commercial/security/login-check', { username, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data.token });
    navigate('ScreensList');
  } catch (error) {
    dispatch({ type: ADD_ERROR_MESSAGE, payload: 'Invalid register' });
  }
};