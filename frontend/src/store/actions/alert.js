import { Alert } from 'react-native';
export const alert = (title,textalert,btn,onPress) => {
    
  return Alert.alert(title,textalert, [{ text: btn,style: {color:"red"},onPress }]);
};
