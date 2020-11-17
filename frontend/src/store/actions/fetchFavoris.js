import AsyncStorage from '@react-native-community/async-storage'
import * as _A from "./actionTypes";



export const get_all_favoris = () => async (dispatch) => {
    try {
        const f= await AsyncStorage.getItem('favoris');
        const g=JSON.parse(f)
      const x=  g===null?[]:g
    dispatch({ type: _A.ALL_FAVORIS, payload: x });
  
    } catch (error) { dispatch({ type:"err fetch favoris",  payload:error={msg2:error.response.data.code,msg:error.response.data.message  }  }); }
    
    
  
    };


    export const add_to_favoris = (all,item) => async (dispatch) => {
   
    // all===undefined&&[]
 
        const newfav = [...all,item]
        const removeDuplicateObjInArray = [];
        newfav.map(x => removeDuplicateObjInArray.filter(a => a.external_id === x.external_id ).length > 0 ? null : removeDuplicateObjInArray.push(x)); 
         await AsyncStorage.setItem('favoris', JSON.stringify(removeDuplicateObjInArray));
        const f= await AsyncStorage.getItem('favoris');
        const g=JSON.parse(f)
        //    console.log("ggg",g)
    
       
        try {
    
        dispatch({ type: _A.ADD_FAVORIS, payload:g});
      
        } catch (error) { dispatch({ type:"err ADD favoris",  payload:error={msg2:error.response.data.code,msg:error.response.data.message  }  }); }
        
        
      
        };
        export const delete_from_favoris = (all,item) => async (dispatch) => {
          
            try {
       

           const x= await all.filter(el=>el.id !==item.id)
          
           await AsyncStorage.setItem('favoris', JSON.stringify(x));
           const f= await AsyncStorage.getItem('favoris');
           const g=JSON.parse(f)
              
            dispatch({ type: _A.DELETE_FAVORIS, payload: g });
          
            } catch (error) { dispatch({ type:"err DELETE favoris",  payload:error={msg2:error.response.data.code,msg:error.response.data.message  }  }); }
            
            
          
            };