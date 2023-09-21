import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SelectLanguage from './Screens/Customer Screens/SelectLanguage';
import WelcomeScreen from './Screens/Customer Screens/WelcomeScreen';
import HelpScreen from './Screens/Customer Screens/HelpScreen';
import MobileNumberScreen from './Screens/Customer Screens/MobileNumberScreen';
import OTPScreen from './Screens/Customer Screens/OTPScreen';
import ProfileScreen from './Screens/Customer Screens/ProfileScreen';
import LocationScreen from './Screens/Customer Screens/LocationScreen';
import { Image } from 'react-native';
import Tw from 'twrnc';
import DriverMobileNumberScreen from './Screens/Driver Screens/DriverMobileNumberScreen';
import { Provider } from 'react-redux';
import { Store } from './Store';
import DriverOtpScreen from './Screens/Driver Screens/DriverOtpScreen';
import DriverWelcomeScreen from './Screens/Driver Screens/DriverWelcomeScreen';


const StackNavigator = () => {
    const Stack=createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
      <Provider store={Store}>
        <Stack.Navigator>
            
            {/* Driver Screens */}
            <Stack.Screen name='DriverMobileNumber' component={DriverMobileNumberScreen} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name='DriverOTP' component={DriverOtpScreen} options={{ headerShown:false}}></Stack.Screen>
            <Stack.Screen name='DriverWelcome' component={DriverWelcomeScreen} options={{ headerShown:false}}></Stack.Screen>

            {/* customer Screens */}
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
        </Provider>
      </NavigationContainer>
    </>
  )
}

export default StackNavigator