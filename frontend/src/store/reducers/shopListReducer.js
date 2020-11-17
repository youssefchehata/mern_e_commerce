import * as _A from '../actions/actionTypes';
import { spinner } from '../../assets/images/img';

const INITIAL_STATE = {
    List_shop: [],
    NewListShop:[],
    colisage:[],
    quantité:[],
    count:0,
    shoppingBasket:[],
    purchaseDetails:[],
    submitCmd:[],
    spinner:true

  
};

export default (state = INITIAL_STATE, action) => {
  // console.log("shoplist",state,action.payload);
  // return state
  const { type, payload } = action;

  switch (type) {
//  ***********shopComponent*********
        case _A.GET_ALL_ABOUT_COLISAGE_BY_CURRENT_CLIENT:
          return { ...state, colisage:payload };

          case _A.QTE_CHOOSE_TO_BASQUET:
          return { ...state, quantité:payload };

          case _A.QTE_INCREMENT:
      return { count: state.count + 1 };

    case _A.QTE_DECREMENT:
      return { count: state.count - 1 };

        
         case _A.ADD_PRODUCT_TO_SHOP_LIST:
      return { ...state, shoppingBasket:payload.shoppingBasket ,colisage:[],quantité:[]
    
      };
      case _A.DELETE_PRODUCT_FROM_SHOP_LIST:
        return { ...state, shoppingBasket:payload 
      
        };

        case _A.SUBMIT_COMMANDE:
          return { ...state, shoppingBasket:payload.shoppingBasket };


          // ************BasketComponent*****************

                        case _A.ALL_PURCHASES:
      return { ...state, List_shop:payload ,NewListShop:payload};

          case _A.ALL_PURCHASES_OF_A_CLIENT:
            return { ...state, NewListShop:payload };
    

          case _A.SINGLE_PURCHASES_BY_ID:
            return { ...state,spinner:false, purchaseDetails:payload };
  
            case 'clear_single_purchase':
              return { ...state,spinner:true, purchaseDetails:[] };
    default:
      return state;
  }
};