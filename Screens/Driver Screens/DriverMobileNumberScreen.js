import {SafeAreaView,TouchableOpacity, View,Image, Text,ScrollView, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Tw from 'twrnc';
import  {TTFirsNeueTrlLight} from '../../assets/fonts/TT Firs Neue Trial Light.ttf';
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { setDriverNumber } from '../../Redux/Drivers Redux/DriverDetailsSlice';


const DriverMobileNumberScreen = () => {
    const navigation = useNavigation();
    const [onClick,setOnClick]=useState(false);
    const [number,setNumber]=useState('');
    const [countryCode,setCountryCode]=useState('+91');
    const dispatch=useDispatch();
    
    const handleRemoveLastDigit = () => {
        if (number.length > 0) {
          // Remove the last character by slicing the string
          const newNumber = number.slice(0, -1);
          setNumber(newNumber);
        }
    };

    // when ever number changes 
    useEffect(()=>{
        dispatch(setDriverNumber(number));
    },[number]);

    const ForwardNumber =()=>{
        if(number.length !== 10 ){  
            Alert.alert("Invalid Number "," Use a 11 digit number !");
        }else{
            console.log("fs");
            navigation.navigate('DriverOTP');
        }
    };

    
    return (
    <SafeAreaView style={Tw`h-100% bg-[#FFFFF]`}>
      {!onClick &&(
        <View style={Tw`items-center justify-center h-50% 
        `}>
            <Image style={Tw`w-249px h-195px `} source={require('../../assets/images/driverMobileNumber.png')}></Image>
        </View>
      )}

      {/* view middle */}
      <View style={[Tw`mt-10  w-307px h-179px left-32px`,{gap:24}]}>
        
        <View style={[Tw`w-284px h-94px`,{gap:16}]}>
            <Text style={[Tw`text-[#282828] text-20px`,{fontFamily: TTFirsNeueTrlLight , fontWeight:"400"}]}>Enter your mobile number</Text>
            <Text style={[Tw`text-[#282828] text-14px`,{fontFamily: TTFirsNeueTrlLight , fontWeight:"400"}]}>This number will be used for all your ride
related services</Text>
        </View>
      

        <View style={[Tw`flex-row w-307px h-61px border  rounded-10px pt-12px pr-35px pb-12px pl-16px`,{gap:32 , borderColor:"#0b4348"}]}>
            <View style={[Tw`w-79px h-37px flex-row items-center`,{gap:6}]}>
                <Image style={Tw`w-42px h-37px`} source={require('../../assets/images/indianFlag.png')}></Image>
                <Text style={[Tw`text-20px text-[#282828] `,{fontFamily: TTFirsNeueTrlLight,fontWeight:"300"}]}>{countryCode}</Text>
            </View>
            <TouchableOpacity onPress={()=>setOnClick(!onClick)} style={[Tw`w-164px h-37px flex-row items-center`,{}]}>
                {number ? (
                    <Text style={[Tw`text-20px text-[#282828] `,{fontWeight:"300"}]}>{number}</Text>

                ):(
                    <Text style={[Tw`text-14px text-[#282828] `,{opacity:0.5,fontWeight:"300"}]}>{'10 digit mobile number'}</Text>

                )}
            </TouchableOpacity>
        </View>
      </View>


      {/* get otp */}
      <View style={Tw`left-32px mt-10`} >
        <TouchableOpacity onPress={ForwardNumber}  style={Tw`flex items-center justify-center bg-[#D6F22C] shadow-md  rounded-5px  w-307px h-57px`}>
          <Text style={[Tw`text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"600"}]}>Get OTP</Text>
        </TouchableOpacity>
      </View>

      {/* keyboard */}
      {onClick &&(
        <ScrollView style={Tw` mt-5 left-16px w-93% mb-5 `}>
            <View style={[Tw`flex-row w-328px h-90px m-1`,{gap:29}]}>
                <TouchableOpacity onPress={()=>setNumber(number + '1')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>1</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setNumber(number + '2')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>2</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setNumber(number + '3')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>3</Text></TouchableOpacity>
            </View>
            <View style={[Tw`flex-row w-328px h-90px m-1`,{gap:29}]}>
                <TouchableOpacity onPress={()=>setNumber(number + '4')}  style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>4</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setNumber(number + '5')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>5</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setNumber(number + '6')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>6</Text></TouchableOpacity>
            </View>
            <View style={[Tw`flex-row w-328px h-90px m-1`,{gap:29}]}>
                <TouchableOpacity onPress={()=>setNumber(number + '7')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>7</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setNumber(number + '8')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>8</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setNumber(number + '9')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>9</Text></TouchableOpacity>
            </View>
            <View style={[Tw`flex-row w-328px h-90px m-1`,{gap:29}]}>
                <TouchableOpacity onPress={handleRemoveLastDigit} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px justify-center pb-19px pl-30px`,{gap:10}] }><Feather name="delete" size={20} color="black" /></TouchableOpacity>
                <TouchableOpacity onPress={()=>setNumber(number + '0')}  style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px justify-center pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>0</Text></TouchableOpacity>
                <TouchableOpacity onPress={ForwardNumber} style={[Tw`bg-[#d6f22c] shadow-sm w-90px h-90px pt-19px justify-center pr-38px pb-19px pl-38px`,{gap:10}] }><Image style={Tw`h-28px w-28px`} source={require('../../assets/images/forward.png')}></Image></TouchableOpacity>
            </View>
        </ScrollView>
      )}


    </SafeAreaView>
  )
}

export default DriverMobileNumberScreen