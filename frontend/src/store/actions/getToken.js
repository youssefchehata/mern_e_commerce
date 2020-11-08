import AsyncStorage from '@react-native-community/async-storage';
export default async () => {
    const token = await AsyncStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return headers;
};
