import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://<host>/api/data'); // Substitua <host> pelo IP ou URL da sua API

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível buscar os dados da API.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Buscar Dados" onPress={fetchData} />
      {message ? <Text style={styles.result}>Resultado: {message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  result: {
    marginTop: 16,
    fontSize: 16,
    color: 'black',
  },
});

export default App;