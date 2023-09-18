import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SelectLanguage from './Screens/SelectLanguage';
import WelcomeScreen from './Screens/WelcomeScreen';


const StackNavigator = () => {
    const Stack=createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen name='Language' component={SelectLanguage} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown:false}}></Stack.Screen>
        
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default StackNavigator