import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import authService from '../../services/authServices'; // Importa o authService
import errorHandler from '../../services/errorHandle'; // Importa o handler de erros

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Chama o serviço de autenticação
      const userData = await authService.Userlogin(email, password);
      console.log('Usuário autenticado:', userData);
    } catch (error) {
      // Trata os erros usando o errorHandler
      errorHandler(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
