import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

// Tipagem para os dados do usuário conforme a resposta da API
interface Usuario {
  id: number;
  cpf: string;
  nomeCompleto: string;
  email: string;
  senha: string;
  createdAt: string;
  updatedAt: string;
  idUsuario: number | null;
}

const UserList: React.FC = () => {
  const [data, setData] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dbe0-200-216-125-172.ngrok-free.app/api/consultar/lista/usuario'
        );
        if (response.data) {
          setData(response.data); // Atualiza o estado com os dados recebidos
        } else {
          setError('Nenhum dado encontrado');
        }
      } catch (err) {
        setError('Erro ao carregar os dados');
        console.error('Erro na requisição:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Usuario }) => (
    <View
      style={{
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Nome Completo: {item.nomeCompleto}
      </Text>
      <Text>Email: {item.email}</Text>
      <Text>CPF: {item.cpf}</Text>
      <Text>Data de Criação: {new Date(item.createdAt).toLocaleString()}</Text>
      <Text>Data de Atualização: {new Date(item.updatedAt).toLocaleString()}</Text>
      <Text>ID do Usuário: {item.idUsuario ?? 'Não disponível'}</Text>
    </View>
  );

  const keyExtractor = (item: Usuario) => {
    // Verifique se 'id' está presente, caso contrário, use um valor padrão (por exemplo, '0' ou 'defaultId')
    return item.id ? item.id.toString() : 'defaultId';
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Lista de Usuários
      </Text>

      {/* A renderização da lista deve funcionar na web e no celular */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default UserList;
