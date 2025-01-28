import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styles } from '../styles/globalStyles';
import { postCadastro } from '../services/api';

const CadastroInicial = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = async () => {
    try {
      await postCadastro({ nome, email });
      Alert.alert('Sucesso', 'Cadastro inicial enviado!');
      navigation.navigate('CadastroEndereco');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível enviar os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
      />
      <Button title="Próximo" onPress={handleNext} />
    </View>
  );
};

export default CadastroInicial;
