import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}