import { Alert,ScrollView,TouchableOpacity,SafeAreaView,Image,View, Text } from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import  {TTFirsNeueTrlLight} from '../assets/fonts/TT Firs Neue Trial Light.ttf';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import { useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


const OTPScreen = () => {
  const route=useRoute();
  const navigation=useNavigation();
  const [number,setNumber]=useState('');
  // setting raw otp 
  const [otp,setOtp]=useState('4200');
  const [otpInput,setOtpInput]=useState('');

  useEffect(() => {
    const phoneNumber = route.params?.phonenumber;
    console.log(phoneNumber);
    setNumber(phoneNumber);
  }, []);
  
  const deleteBack=()=>{
    if (otpInput.length > 0) {
      // Remove the last character by slicing the string
      const newotp = otpInput.slice(0, -1);
      setOtpInput(newotp);
    }
  };

  const submit=()=>{
    if(otpInput.length === 4){
      if(otpInput===otp){
        // success
        navigation.navigate('Profile');
      }else{
        Alert.alert("Invalid OTP", "Re-enter OTP");
      }
    }
    else{
      Alert.alert("Invalid OTP", "Re-enter OTP");
    }
  };


  return (
    <SafeAreaView style={Tw`bg-[#FFFFFF] h-100%`}>

      {/* header */}
      <View style={Tw` h-25% bg-[#d6f22c] `}>
        <TouchableOpacity onPress={()=>navigation.navigate('Help')} style={[Tw`absolute z-1 top-32px flex-row border p-1 left-256px rounded-sm`, { borderColor: '#0b4348' }]}>
          <EvilIcons name="question" size={24} color="#0b4348" />
          <Text style={[Tw`text-[#0b4348] text-16px font-normal`,{fontFamily: TTFirsNeueTrlLight}]}>Help</Text>
        </TouchableOpacity> 
        
        
        <View style={Tw`flex-col mt-15 left-16px`}>
            <Image source={require('../assets/images/lock.png')} style={Tw`w-40px h-40px`}></Image>
            <View style={[Tw`w-291px h-60px mt-2`,{gap:8}]}>
                <Text style={[Tw`text-24px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"300"}]}>Enter Otp</Text>
                <Text style={[Tw`text-[#282828] text-14px `,{fontFamily: TTFirsNeueTrlLight, fontWeight:"300"}]}>Enter Otp sent to mobile number *******{number.slice(-3)}</Text>
            </View>
        </View>
      </View>

      {/* Blocks */}
      <View style={[Tw`mt-25px w-276px h-60px left-16px flex-row`,{gap:12}]}>
        <View style={[Tw`w-60px h-60px rounded-4px border items-center justify-center`,{borderColor:"#0b4348"}]}><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>{otpInput[0]}</Text></View>
        <View style={[Tw`w-60px h-60px rounded-4px border items-center justify-center`,{borderColor:"#0b4348"}]}><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>{otpInput[1]}</Text></View>
        <View style={[Tw`w-60px h-60px rounded-4px border items-center justify-center`,{borderColor:"#0b4348"}]}><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>{otpInput[2]}</Text></View>
        <View style={[Tw`w-60px h-60px rounded-4px border items-center justify-center`,{borderColor:"#0b4348"}]}><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>{otpInput[3]}</Text></View>
      </View>

      {/* resend otp */}
      <View style={Tw`w-150px h-23px left-16px mt-15px`}>
        <Text style={[Tw`text-[#0b4348] text-14px font-normal`,{fontFamily: TTFirsNeueTrlLight , fontWeight:"600"}]}>Resend OTP in 0.03 sec</Text>
      </View>

      {/* submit */}
      <View style={Tw`left-32px`}>
        <TouchableOpacity onPress={submit}  style={Tw`flex items-center justify-center bg-[#D6F22C] shadow-md  rounded-5px  w-80% h-57px`}>
          <Text style={[Tw`text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"600"}]}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* numeric keypad */}
      <ScrollView style={Tw` mt-5 left-16px w-328px mb-5`}>
        <View style={[Tw`flex-row w-328px h-90px `,{gap:29}]}>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '1')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '2')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '3')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>3</Text></TouchableOpacity>
        </View>
        <View style={[Tw`flex-row w-328px h-90px `,{gap:29}]}>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '4')}  style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '5')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '6')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>6</Text></TouchableOpacity>
        </View>
        <View style={[Tw`flex-row w-328px h-90px `,{gap:29}]}>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '7')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '8')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '9')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>9</Text></TouchableOpacity>
        </View>
        <View style={[Tw`flex-row w-328px h-90px `,{gap:29}]}>
            <TouchableOpacity onPress={deleteBack} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px justify-center pb-19px pl-30px`,{gap:10}] }><Feather name="delete" size={20} color="black" /></TouchableOpacity>
            <TouchableOpacity onPress={()=>setOtpInput(otpInput + '0')}  style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px justify-center pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={submit}  style={[Tw`bg-[#d6f22c] shadow-sm w-90px h-90px pt-19px justify-center pr-38px pb-19px pl-38px`,{gap:10}] }><Image style={Tw`h-28px w-28px`} source={require('../assets/images/forward.png')}></Image></TouchableOpacity>
        </View>
      </ScrollView>






    </SafeAreaView>
  )
}

export default OTPScreen