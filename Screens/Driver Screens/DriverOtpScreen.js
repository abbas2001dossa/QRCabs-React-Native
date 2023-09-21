import {SafeAreaView,TouchableOpacity, View,Image, Text,ScrollView, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Tw from 'twrnc';
import  {TTFirsNeueTrlLight} from '../../assets/fonts/TT Firs Neue Trial Light.ttf';
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { SelectDriverNumber } from '../../Redux/Drivers Redux/DriverDetailsSlice';

const DriverOtpScreen = () => {
    const [onClick,setOnClick]=useState(false);
    const navigation = useNavigation();
    const number = useSelector(SelectDriverNumber);
    const [otpInput,setOtpInput]=useState('');
    const [otp,setOtp]=useState('4200');

    const resendOtp=()=>{

    };

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
            navigation.navigate('DriverWelcome');
          }else{
            Alert.alert("Invalid OTP", "Re-enter OTP");
          }
        }
        else{
          Alert.alert("Invalid OTP", "Re-enter OTP");
        }
      };


  return (
    <SafeAreaView style={Tw`h-100% bg-[#FFFFF]`}>
      {/* driverOtp */}

        {/* initial image  */}
        {!onClick &&(
            <View style={Tw`items-center justify-center h-40% `}>
                <Image style={Tw`w-249px h-195px `} source={require('../../assets/images/driverMobileNumber.png')}></Image>
            </View>
        )}

        {/* view middle */}
        <View style={[Tw`mt-20  w-276px h-155px left-32px `,{gap:24}]}>
            <View style={[Tw`w-219px h-71px`,{gap:16}]}>
                <Text style={[Tw`text-[#282828] text-20px`,{fontFamily: TTFirsNeueTrlLight , fontWeight:"400"}]}>Enter OTP</Text>
                <Text style={[Tw`text-[#282828] text-14px`,{fontFamily: TTFirsNeueTrlLight , fontWeight:"400"}]}>OTP has been sent to *******{number.slice(-3)}</Text>
            </View>

            <View style={[Tw`w-276px h-60px  flex-row`,{gap:12}]}>
                <TouchableOpacity onPress={()=>setOnClick(!onClick)} style={[Tw`w-60px h-60px rounded-4px border items-center justify-center`,{borderColor:"#0b4348"}]}><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>{otpInput[0]}</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setOnClick(!onClick)} style={[Tw`w-60px h-60px rounded-4px border items-center justify-center`,{borderColor:"#0b4348"}]}><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>{otpInput[1]}</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setOnClick(!onClick)} style={[Tw`w-60px h-60px rounded-4px border items-center justify-center`,{borderColor:"#0b4348"}]}><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>{otpInput[2]}</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setOnClick(!onClick)} style={[Tw`w-60px h-60px rounded-4px border items-center justify-center`,{borderColor:"#0b4348"}]}><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>{otpInput[3]}</Text></TouchableOpacity>
            </View>
        </View>

        {/* resend Otp */}
        <TouchableOpacity onPress={resendOtp} style={Tw`left-32px mt-2`}>
            <Text style={[Tw`text-[#0b4348] text-14px`,{fontFamily: TTFirsNeueTrlLight , fontWeight:"600"}]}>Resend OTP</Text>
        </TouchableOpacity>
        
        {/* submit */}
        <View style={Tw`left-32px mt-5`} >
            <TouchableOpacity onPress={submit} style={Tw`flex items-center justify-center bg-[#D6F22C] shadow-md  rounded-5px  w-307px h-57px`}>
            <Text style={[Tw`text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"600"}]}>Submit</Text>
            </TouchableOpacity>
        </View>

        {/* keybaord */}
        {onClick &&(
            <ScrollView style={Tw` mt-5 left-16px w-328px mb-5`}>
                <View style={[Tw`flex-row w-328px h-90px m-1`,{gap:29}]}>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '1')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>1</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '2')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>2</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '3')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>3</Text></TouchableOpacity>
                </View>
                <View style={[Tw`flex-row w-328px h-90px m-1`,{gap:29}]}>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '4')}  style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>4</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '5')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>5</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '6')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>6</Text></TouchableOpacity>
                </View>
                <View style={[Tw`flex-row w-328px h-90px m-1`,{gap:29}]}>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '7')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>7</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '8')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>8</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '9')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>9</Text></TouchableOpacity>
                </View>
                <View style={[Tw`flex-row w-328px h-90px m-1`,{gap:29}]}>
                    <TouchableOpacity onPress={deleteBack} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px justify-center pb-19px pl-30px`,{gap:10}] }><Feather name="delete" size={20} color="black" /></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setOtpInput(otpInput + '0')}  style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px justify-center pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>0</Text></TouchableOpacity>
                    <TouchableOpacity onPress={submit}  style={[Tw`bg-[#d6f22c] shadow-sm w-90px h-90px pt-19px justify-center pr-38px pb-19px pl-38px`,{gap:10}] }><Image style={Tw`h-28px w-28px`} source={require('../../assets/images/forward.png')}></Image></TouchableOpacity>
                </View>
            </ScrollView>
        )}


    </SafeAreaView>
  )
}

export default DriverOtpScreen