import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função assíncrona dentro do useEffect
    const fetchData = async () => {
      try {
        const response = await axios.get('https://76d8-152-255-121-236.ngrok-free.app/api/consultar/lista/usuario');
        
        // Verificando se os dados da resposta são válidos
        if (response && response.data) {
          console.log(response.data);
          setData(response.data); // Atualiza o estado com os dados recebidos
        } else {
          throw new Error('Resposta vazia.');
        }
      } catch (error) {
        // Erro gerado na requisição ou no processamento dos dados
        //setError(error.message || 'Erro ao carregar dados.');
        console.error('Erro na requisição:', error); // Loga o erro completo para depuração
      } finally {
        setLoading(false); // Finaliza o carregamento, independentemente do sucesso ou falha
      }
    };

    fetchData(); // Chama a função assíncrona no momento do carregamento
  }, []); // Executa apenas uma vez, quando o componente for montado

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Exibe os dados carregados */}
    </div>
  );
}
