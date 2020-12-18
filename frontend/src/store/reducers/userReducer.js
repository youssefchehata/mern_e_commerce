import * as A from '../constants/userConstant';

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.USER_LOGIN_REQUEST:
      return { loading: true };
    case A.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case A.USER_LOGIN_FAIL:
      return { loading: false, error: payload };
    case A.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.USER_REGISTER_REQUEST:
      return { loading: true };
    case A.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: payload };
    case A.USER_REGISTER_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case A.USER_DETAILS_SUCCESS:
      return { loading: false, user: payload };
    case A.USER_DETAILS_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state={}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.USER_UPDATE_PROFILE_REQUEST:
      return {  loading: true };

    case A.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false,success:true, userInfo: payload };

    case A.USER_UPDATE_PROFILE_RESET:
      return { loading: false,  };

    case A.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
