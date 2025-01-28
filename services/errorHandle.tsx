import Toast from 'react-native-toast-message';

const handleError = (error: any) => {
  const message =
    error.response?.data?.message || error.message || 'Algo deu errado!';

  // Exibir mensagem usando Toast
  Toast.show({
    type: 'error',
    text1: 'Erro',
    text2: message,
  });

  // Log para debugging (opcional)
  console.error('Erro capturado:', error);
};

export default handleError;
