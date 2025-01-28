import axios from 'axios';

const api = axios.create({
  baseURL: 'https://76d8-152-255-121-236.ngrok-free.app'  
  
});
// Interceptores de requisição
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Substituir por AsyncStorage no React Native
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptores de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na resposta:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
