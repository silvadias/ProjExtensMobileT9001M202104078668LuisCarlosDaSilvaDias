import api from './api'; // Cliente Axios centralizado

const Userlogin = async (cpf: string, senha: string): Promise<any> => {
    try {
      const response = await api.post('/api/acesso/usuario', 
        { 
        cpf:cpf,
        senha:senha
        });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
 




const Userlogout = async () => {
  try {
    // Logout apenas realiza ações na API (se necessário)
    await api.post('/auth/logout');
  } catch (error) {
    console.error('Erro ao realizar logout:', error);
    throw error;
  }
};

const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  Userlogin,
  Userlogout,
  getCurrentUser,
};
