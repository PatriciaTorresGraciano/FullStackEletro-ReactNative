import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Login from './src/views/Login';
import Home from './src/views/Home';
import Produtos from './src/views/Produtos';
// COMPONENTES
// import Header from './src/components/Header';
// <Header />



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Produtos" component={Produtos} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );  
}


