// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from './screens/SignUp';
import { Login } from './screens/Login';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'white',
        },
      }}>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
