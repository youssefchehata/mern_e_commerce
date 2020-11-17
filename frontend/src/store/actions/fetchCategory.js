import * as _A from './actionTypes';
import Api from '../../apis/prise-de-commande';
import AsyncStorage from '@react-native-community/async-storage';
import cache from '../../components/utility/Cache';
import { produce } from 'immer';
import { SPINNER_LOADING } from './spinnerLoading';
import getToken from './getToken';
import { getCache } from '../../apis/prise-de-commande';
import { Alert } from 'react-native';

// export const fetchAllCategory = () => (dispatch) => {
//   const url = '/api/secured/commercial/all-parent-categories';

//   AsyncStorage.getItem('token').then((savedToken) => {

//     const headers = { Authorization: `Bearer ${savedToken}` };

//     return Api.get(url, { headers })
//       .then((response) => { dispatch({ type: _A.FETCH_ALL_CATEGORY, payload: response.data.payload }); })

//       .catch((error) => {
//         dispatch(getCache(url, dispatch,_A.FETCH_ALL_CATEGORY));
//         dispatch({ type: 'err fetchAllCategory',
//         payload: (error = { msg2: error.response.data.code, msg: error.response.data.message, }), });
//       });
//   });
// };

export const fetchAllCategory = () => async (dispatch) => {
  dispatch(SPINNER_LOADING(true));
  const url = '/api/secured/commercial/all-parent-categories';


  try {
    const token = await AsyncStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    const response = await Api.get(url, { headers });
     Promise.all([
      dispatch({ type: _A.FETCH_ALL_CATEGORY, payload: response.data.payload }),
      dispatch(SPINNER_LOADING(false))
  ]);
  } catch (error) {
    
    dispatch(SPINNER_LOADING(false));
    dispatch(await getCache(url, dispatch, _A.FETCH_ALL_CATEGORY));
    // console.log(object)
    dispatch({ type: 'err FETCH_ALL_CATEGORY',
     payload: (error = { msg2: error.response.data.code, msg: error.response.data.message, }),
     });
  }
};

export const clear = () => async (dispatch) => {
  dispatch({ type: _A.CLEAR_ALL_CHILD_CATEGORY });
};

// ****************************childcat-1-*********
// export const childOne = (external_id) => async (dispatch) => {
//   dispatch(SPINNER_LOADING(true));
//   try {
//     const token = await AsyncStorage.getItem('token');
//     const headers = await { Authorization: `Bearer ${token}` };
//     const url= `/api/secured/commercial/category/${external_id}/children`
//     const response = await Api.get(url , { headers } );

//     {
//       dispatch({ type: _A.GET_SUB_CHILD_CATG_ONE, payload: response.data.payload, });
//     }
//   } catch (error) {
//     dispatch(getCache(url, dispatch,_A.GET_SUB_CHILD_CATG_ONE));
//     if ( error.response.data.code === 400 || 401 || 404 || 500 || undefined || null ) { dispatch({ type: _A.GET_SUB_CHILD_CATG_ONE, payload: [] });
//     }
//     dispatch({ type: 'err GET_SUB_CHILD_CATG_ONE', payload: (error = { msg2: error.response.data.code, msg: error.response.data.message, }), });
//   }
// };
export const childOne = (external_id) => async (dispatch) => {
  dispatch(SPINNER_LOADING(true));
  try {
    const token = await AsyncStorage.getItem('token');
    const headers =  { Authorization: `Bearer ${token}` };
    const url = `/api/secured/commercial/category/${external_id}/children`;
    const response = await Api.get(url, { headers });
 
    {
      dispatch({ type: _A.GET_SUB_CHILD_CATG_ONE, payload: response.data.payload, });
    }
  } catch (error) {
    dispatch({ type: _A.GET_SUB_CHILD_CATG_ONE, payload: [] });
    dispatch({ type: 'err1 GET_SUB_CHILD_CATG_ONE',
    //  payload: (error = { msg2: error.response.data.code, msg: error.response.data.message, })
     });

  } finally {
    // dispatch(getCache(url, dispatch,_A.GET_SUB_CHILD_CATG_ONE));
  }
};

// ****************************childcat-2-*********
export const childTow = (external_id) => async (dispatch) => {
  dispatch(SPINNER_LOADING(true));
  try {
    const token = await AsyncStorage.getItem('token');
    const headers = await { Authorization: `Bearer ${token}` };
    const response = await Api.get(
      `/api/secured/commercial/category/${external_id}/children`,
      { headers }
    );

    {
      dispatch({
        type: _A.GET_SUB_CHILD_CATG_TOW,
        payload: response.data.payload,
      });
    }
  } catch (error) {
    dispatch({
      type: 'err GET_SUB_CHILD_CATG_TOW',
      // payload: (error = {
      //   msg2: error.response.data.code,
      //   msg: error.response.data.message,
      // }),
    });
  }
};
// ****************************childcat-3-*********
export const childThree = (external_id) => async (dispatch) => {
  dispatch(SPINNER_LOADING(true));
  try {
    const token = await AsyncStorage.getItem('token');
    const headers = await { Authorization: `Bearer ${token}` };
    const response = await Api.get(
      `/api/secured/commercial/category/${external_id}/children`,
      { headers }
    );

    {
      dispatch({
        type: _A.GET_SUB_CHILD_CATG_THREE,
        payload: response.data.payload,
      });
    }
  } catch (error) {
    // if(error.response.data.code===400||undefined||null){dispatch({ type: _A.GET_CHILDREN_CATEGORY,  payload: {childCategory:[]} });}
    dispatch({
      type: 'err GET_SUB_CHILD_CATG_THREE',
      payload: (error = {
        msg2: error.response.data.code,
        msg: error.response.data.message,
      }),
    });
  }
};
// ****************************childcat-4-*********
export const childFour = (external_id) => async (dispatch) => {
  dispatch(SPINNER_LOADING(true));
  try {
    const token = await AsyncStorage.getItem('token');
    const headers = await { Authorization: `Bearer ${token}` };
    const response = await Api.get(
      `/api/secured/commercial/category/${external_id}/children`,
      { headers }
    );

    {
      dispatch({
        type: _A.GET_SUB_CHILD_CATG_FOUR,
        payload: response.data.payload,
      });
    }
  } catch (error) {
    dispatch({
      type: 'err GET_SUB_CHILD_CATG_FOUR',
      payload: (error = {
        msg2: error.response.data.code,
        msg: error.response.data.message,
      }),
    });
  }
};
