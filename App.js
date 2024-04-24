import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'


import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/login';
import AfterLogin from './Screens/Afterlogin';
import Edad from './Screens/Edad';
import Estatura from './Screens/Estatura';
import ActFisica from './Screens/ActFisica';


export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AfterLogin" component={AfterLogin} />
        <Stack.Screen name="Edad" component={Edad}/>
        <Stack.Screen name="Estatura" component={Estatura}/>
        <Stack.Screen name="ActFisica" component={ActFisica}/>
        
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
      
    </NavigationContainer>
  );
}
