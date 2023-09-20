import { TextInput,ScrollView,TouchableOpacity,SafeAreaView,Image,View, Text ,KeyboardAvoidingView,Alert} from 'react-native'
import React, { useState } from 'react'
import Tw from 'twrnc';
import  {TTFirsNeueTrlLight} from '../assets/fonts/TT Firs Neue Trial Light.ttf';
import { EvilIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

const HelpScreen = () => {
  const navigation=useNavigation();
  const [complaint,setComplaint]=useState('');
  // mock data afor queries
  
  const requestCallback=()=>{

  };
  

  return (
    <SafeAreaView style={Tw`bg-[#FFFFFF] h-100%`}>
      
      {/* help tuitle */}
      <View style={[Tw`flex-col h-79px w-57px left-16px mt-20px`,{gap:16}]}>
        <FontAwesome name="question-circle-o" size={34} color="#0b4348" />
        <Text style={[Tw`text-[#0b4348] text-24px font-normal`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>Help</Text>

      </View>
    

      {/* scrollView Queries  */}
      <ScrollView style={[Tw`flex-col `]}>

        <View style={[Tw`mt-5 justify-center items-center flex-row bg-[#E8E8E8] w-328px h-62px left-16px border rounded-5px p-8px`,{borderColor:"#E8E8E8",gap:18}]}>
          <Text  style={[Tw`text-[#282828] text-14px w-280px h-46px `,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>Lorem ipsum dolor sit amet, consectetu adipis?</Text>
          <Entypo style={Tw``} name="chevron-down" size={25} color="black" />
        </View>

        <View style={[Tw`mt-5 justify-center items-center flex-row bg-[#E8E8E8] w-328px h-62px left-16px border rounded-5px p-8px`,{borderColor:"#E8E8E8",gap:18}]}>
          <Text  style={[Tw`text-[#282828] text-14px w-280px h-46px `,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>Lorem ipsum dolor sit amet, consectetu
 adipis?</Text>
          <Entypo style={Tw``} name="chevron-down" size={25} color="black" />
        </View>

        <View style={[Tw`mt-5 justify-center items-center flex-row bg-[#E8E8E8] w-328px h-62px left-16px border rounded-5px p-8px`,{borderColor:"#E8E8E8",gap:18}]}>
          <Text  style={[Tw`text-[#282828] text-14px w-280px h-46px `,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>Lorem ipsum dolor sit amet, consectetu adipis?</Text>
          <Entypo style={Tw``} name="chevron-down" size={25} color="black" />
        </View>

        <View style={[Tw`mt-5 justify-center items-center flex-row bg-[#E8E8E8] w-328px h-62px left-16px border rounded-5px p-8px`,{borderColor:"#E8E8E8",gap:18}]}>
          <Text  style={[Tw`text-[#282828] text-14px w-280px h-46px `,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>Lorem ipsum dolor sit amet, consectetu adipis?</Text>
          <Entypo style={Tw``} name="chevron-down" size={25} color="black" />
        </View>
        

        {/* footer */}
        <View style={[Tw`items-center mt-5 w-328px left-16px bg-[#E8E8E8] p-10px`,{}]}>
          <Text  style={[Tw`text-[#282828] text-12px w-280px h-26px border-b-2`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>Write your complaints to receive a callback from us</Text>
          <View>
            <TextInput value={complaint} onChangeText={(text)=>setComplaint(text)} style={Tw`rounded-10px h-50px w-280px`} placeholder='Write your complaint here ...'></TextInput>
            <View style={[Tw`border rounded-5px`,{borderColor:'#0b4348'}]}>
              <TouchableOpacity onPress={requestCallback} style={[Tw`flex-row items-center justify-center w-233px h-49px`,{gap:10}]}>
                <FontAwesome style={Tw``} name="phone" size={24} color="#0b4348" />
                <Text  style={[Tw`text-[#0b4348] text-16px`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"300"}]}>Request a callback </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </ScrollView>

      


    </SafeAreaView>
  )
}

export default HelpScreen