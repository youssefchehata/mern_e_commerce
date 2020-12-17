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