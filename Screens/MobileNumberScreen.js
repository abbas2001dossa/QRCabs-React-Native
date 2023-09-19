import {SafeAreaView,TouchableOpacity, View,Image, Text,ScrollView, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Tw from 'twrnc';
import  {TTFirsNeueTrlLight} from '../assets/fonts/TT Firs Neue Trial Light.ttf';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from 'react';
import { TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


const MobileNumberScreen = () => {
    const navigation = useNavigation();
    const [countryCode,setCountryCode]=useState('+91');
    const [number,setNumber]=useState('');
    const [checkboxmark,setCheckboxmark]=useState(false);

    const handleNumberChange = (num) => {
        setNumber([...number, num]); // Append 'num' to the 'number' array
    };
    const handleRemoveLastDigit = () => {
        if (number.length > 0) {
          // Remove the last character by slicing the string
          const newNumber = number.slice(0, -1);
          setNumber(newNumber);
        }
    };
    
    const ForwardNumber =()=>{
        if(number.length != 10){
            Alert.alert("Invalid Number "," Use a 11 digit number !");
        }else{
            console.log("fs");
        }
    };


    return (
    <SafeAreaView style={Tw`bg-[#FFFFFF] h-100%`}>
        {/*Qr cabs image  */}
      <View style={Tw` h-33% bg-[#d6f22c] `}>
        <TouchableOpacity onPress={()=>navigation.navigate('Help')} style={[Tw`absolute z-1 top-32px flex-row border p-1 left-256px rounded-sm`, { borderColor: '#0b4348' }]}>
          <EvilIcons name="question" size={24} color="#0b4348" />
          <Text style={[Tw`text-[#0b4348] text-16px font-normal`,{fontFamily: TTFirsNeueTrlLight}]}>Help</Text>
        </TouchableOpacity> 
        
        
        <View style={Tw`flex-col top-111px left-16px`}>
            <FontAwesome style={Tw``} name="phone" size={35} color="#0b4348" />
            <View style={[Tw`w-261px h-60px mt-2`,{gap:8}]}>
                <Text style={[Tw`text-24px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"300"}]}>Enter mobile number</Text>
                <Text style={[Tw`text-[#282828] text-14px`,{fontFamily: TTFirsNeueTrlLight, fontWeight:"300"}]}>Verify your account using otp</Text>
            </View>
        </View>
      </View>

      <View style={[Tw`flex-row w-326px h-61px border left-16px rounded-10px pt-12px pr-35px pb-12px pl-16px mt-10`,{gap:32 , borderColor:"#0b4348"}]}>
        <View style={[Tw`w-79px h-37px flex-row items-center`,{gap:6}]}>
            <Image style={Tw`w-42px h-37px`} source={require('../assets/images/indianFlag.png')}></Image>
            <Text style={[Tw`text-20px text-[#282828] `,{fontFamily: TTFirsNeueTrlLight,fontWeight:"300"}]}>{countryCode}</Text>
        </View>
        <View style={[Tw`w-164px h-37px flex-row items-center`,{}]}>
            {number ? (
                <Text style={[Tw`text-20px text-[#282828] `,{fontWeight:"300"}]}>{number}</Text>

            ):(
                <Text style={[Tw`text-14px text-[#282828] `,{opacity:0.5,fontWeight:"300"}]}>{'10 digit mobile number'}</Text>

            )}
        </View>
      </View>

      {/* checker */}
      <View style={[Tw`flex-row h-38px w-328px mt-5  left-16px`,{gap:16}]}>
        <MaterialCommunityIcons onPress={()=>setCheckboxmark(!checkboxmark)} name={checkboxmark? "checkbox-blank-outline" :"checkbox-marked"} size={30} color="black" />
        <Text style={[Tw`text-12px text-[#282828]`,{fontWeight:"300",fontFamily: TTFirsNeueTrlLight, maxWidth: 260}]}>By entering your number you agree the terms and conditions of qr cabs technologies</Text>
      </View>

      {/* Keyboard */}
      <ScrollView style={Tw` mt-5 left-16px w-328px mb-5`}>
        <View style={[Tw`flex-row w-328px h-90px `,{gap:29}]}>
            <TouchableOpacity onPress={()=>setNumber(number + '1')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setNumber(number + '2')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setNumber(number + '3')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>3</Text></TouchableOpacity>
        </View>
        <View style={[Tw`flex-row w-328px h-90px `,{gap:29}]}>
            <TouchableOpacity onPress={()=>setNumber(number + '4')}  style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setNumber(number + '5')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setNumber(number + '6')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>6</Text></TouchableOpacity>
        </View>
        <View style={[Tw`flex-row w-328px h-90px `,{gap:29}]}>
            <TouchableOpacity onPress={()=>setNumber(number + '7')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setNumber(number + '8')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setNumber(number + '9')} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>9</Text></TouchableOpacity>
        </View>
        <View style={[Tw`flex-row w-328px h-90px `,{gap:29}]}>
            <TouchableOpacity onPress={handleRemoveLastDigit} style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px justify-center pb-19px pl-30px`,{gap:10}] }><Feather name="delete" size={20} color="black" /></TouchableOpacity>
            <TouchableOpacity onPress={()=>setNumber(number + '0')}  style={[Tw`bg-[#FCFCFC] shadow-sm w-90px h-90px pt-19px pr-38px justify-center pb-19px pl-38px`,{gap:10}] }><Text style={[Tw`text-24px text-[#282828]`,{fontWeight:"400"}]}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={ForwardNumber} style={[Tw`bg-[#d6f22c] shadow-sm w-90px h-90px pt-19px justify-center pr-38px pb-19px pl-38px`,{gap:10}] }><Image style={Tw`h-28px w-28px`} source={require('../assets/images/forward.png')}></Image></TouchableOpacity>
        </View>
      </ScrollView>




    </SafeAreaView>
  )
}

export default MobileNumberScreen