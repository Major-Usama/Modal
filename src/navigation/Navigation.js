
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import HomeClickScreen from '../screens/HomeClickScreen';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeClickScreen" component={HomeClickScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;