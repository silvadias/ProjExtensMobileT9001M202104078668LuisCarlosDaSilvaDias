import AsyncStorage from '@react-native-async-storage/async-storage';


const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error('Erro ao salvar o token:', error);
    throw error;
  }
};

const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
    throw error;
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.error('Erro ao remover o token:', error);
    throw error;
  }
};

export default {
  saveToken,
  getToken,
  removeToken,
};
