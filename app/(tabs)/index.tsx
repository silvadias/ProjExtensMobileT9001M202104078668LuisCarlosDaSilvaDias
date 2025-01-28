import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import authService from "../../services/authServices"; // Certifique-se de que está apontando para o caminho correto
import errorHandler from "../../services/errorHandle";

const LoginScreen = () => {
  const [cpf, setCpf] = useState(""); // Alterado para string
  const [senha, setPassword] = useState(""); // Alterado para string
  const [loading, setLoading] = useState(false); // Estado para o botão de carregamento

  const handleLogin = async () => {
    try {
      setLoading(true); // Ativa o estado de carregamento
      const userData = await authService.Userlogin(cpf, senha); // Faz a chamada para o serviço de autenticação
      setLoading(false); // Desativa o estado de carregamento
      
      // Mostra uma mensagem de sucesso ou navega para outra tela
      Alert.alert("Login realizado com sucesso!", `Bem-vindo, ${userData.name}`);
    } catch (error) {
      setLoading(false); // Desativa o estado de carregamento em caso de erro
      errorHandler(error); // Tratar o erro com o handler centralizado
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="numeric"
        secureTextEntry
        value={senha}
        onChangeText={setPassword}
      />
      
      <Button
        title={loading ? "Carregando..." : "Entrar"}
        onPress={handleLogin}
        disabled={loading} // Desabilita o botão enquanto está carregando
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
