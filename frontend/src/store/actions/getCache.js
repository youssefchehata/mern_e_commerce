import AsyncStorage from '@react-native-community/async-storage';
export const getCache= async (url, dispatch,type) =>{
  const storedCache = await AsyncStorage.getItem('cache' + url);
  const GetStoredCache =await JSON.parse(storedCache)
  // console.log("url",url);
  // console.log("GetStoredCache",GetStoredCache);
  return await  dispatch({ type, payload:GetStoredCache });
}
// export const getCache = (url, dispatch,type) => {

//   AsyncStorage.getItem('cache' + url).then((stored) => {

//     dispatch({ type, payload: JSON.parse(stored), });
   
//   });
// };