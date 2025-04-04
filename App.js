import React from 'react';
import Home from './components/Home';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Category from './components/Category';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >


      <Stack.Screen name="Category" component={Category} options={{headerShown: false}} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>

        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;