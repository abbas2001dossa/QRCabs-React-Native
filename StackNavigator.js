import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SelectLanguage from './Screens/SelectLanguage';
import WelcomeScreen from './Screens/WelcomeScreen';
import HelpScreen from './Screens/HelpScreen';
import MobileNumberScreen from './Screens/MobileNumberScreen';
import OTPScreen from './Screens/OTPScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LocationScreen from './Screens/LocationScreen';
import { Image } from 'react-native';
import Tw from 'twrnc';

const StackNavigator = () => {
    const Stack=createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen name='Language' component={SelectLanguage} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen 
              name='Help' 
              component={HelpScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#d6f22c', 
                },
                headerTitleAlign: 'center', 
                headerTitle: () => (
                  <Image style={[Tw`h-50px w-50px`,{resizeMode:"contain"}]} source={require('../QRCabs/assets/images/QRCabs-image.png')} /> 
                ),
              }} 
            ></Stack.Screen>
            <Stack.Screen name='MobileNumber' component={MobileNumberScreen} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name='OTP' component={OTPScreen} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Location' component={LocationScreen} options={{ headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default StackNavigator