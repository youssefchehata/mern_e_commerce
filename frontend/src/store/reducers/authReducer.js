import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, SIGNUP_USER_SUCCESS, SIGNOUT_USER, ADD_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE ,REFRESH_TOKEN} from '../actions/actionTypes';

const INITIAL_STATE = {
  // username: 'admin@admin.com',
  // password: 'admin',
  username: '2010001',
  password: '0001',
  loading: null,
  user:'',//token input
    errorMessage:''
  
};

export default (state = INITIAL_STATE, action) => {
  // console.log("auth",state,action.payload);
  // return state
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, username: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case ADD_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };

    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage:'', };


    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload ,loading:false, username:'',password:''};
    
      case REFRESH_TOKEN:
        return { ...state, user: action.payload};
      
    case SIGNUP_USER_SUCCESS:
      return { ...state,  user: action.payload ,loading:false,username:'',password:'' };

    case SIGNOUT_USER:
      return { ...state,  user: '' , errorMessage:'',loading:false,username:'',password:'' };

   

    default:
      return state;
  }
};
