import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroInicial from '../components/CadastroInicial';
//import CadastroEndereco from '../components/CadastroEndereco';
//import EscolhaTipo from '../components/EscolhaTipo';
//import CadastroUsuario from '../components/CadastroUsuario';
//import CadastroEmpresa from '../components/CadastroEmpresa';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CadastroInicial">
       <Stack.Screen name="CadastroInicial" component={CadastroInicial} options={{ title: 'Cadastro Inicial' }} />
     
    </Stack.Navigator>
  );
};

export default AppNavigator;
//<Stack.Screen name="CadastroEndereco" component={CadastroEndereco} options={{ title: 'Cadastro de Endereço' }} />
    // <Stack.Screen name="EscolhaTipo" component={EscolhaTipo} options={{ title: 'Escolha o Tipo' }} />
    // <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{ title: 'Cadastro de Usuário' }} />
    // <Stack.Screen name="CadastroEmpresa" component={CadastroEmpresa} options={{ title: 'Cadastro de Empresa' }} />