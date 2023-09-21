import { TextInput,TouchableOpacity,SafeAreaView,Image,View, Text ,KeyboardAvoidingView,Alert} from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import  {TTFirsNeueTrlLight} from '../../assets/fonts/TT Firs Neue Trial Light.ttf';
import { EvilIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


const LocationScreen = () => {
    const navigation=useNavigation();
  return (
    <SafeAreaView style={Tw`bg-[#FFFFFF] h-100%`}>

      {/* header */}
      <View style={Tw` h-60% `}>
        <TouchableOpacity onPress={()=>navigation.navigate('Help')} style={[Tw`absolute z-1 top-32px flex-row border p-1 left-256px rounded-sm`, { borderColor: '#0b4348' }]}>
          <EvilIcons name="question" size={24} color="#0b4348" />
          <Text style={[Tw`text-[#0b4348] text-16px font-normal`,{fontFamily: TTFirsNeueTrlLight}]}>Help</Text>
        </TouchableOpacity> 
        
        
        <View style={[Tw`flex-col mt-160px left-16px h-113px w-259px`,{gap:15}]}>
            <Image source={require('../../assets/images/location.png')} style={Tw`w-32px h-32px`}></Image>
            <View style={[Tw`w-259px h-113px`,{gap:15}]}>
                <Text style={[Tw`text-24px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"300"}]}>Set your location</Text>
                <Text style={[Tw`text-14px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"300" , }]}>Kindly share location permission to help us improve your ride booking and pickup experience.</Text>
            </View>
        </View>
      </View>

      {/* manual location  */}
      <View style={[Tw`left-32px h-15%`]}>
        <TouchableOpacity style={[Tw` border flex-row rounded-5px w-80% h-57px pt-16px pb-16px pr-25px pl-25px`,{ borderColor:"#0b4348" , gap:15}]}>
            <EvilIcons name="search" size={24} color="#0b4348" />
            <Text style={[Tw`text-16px text-[#0b4348]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"500" ,}]}>Enter location manually</Text>
        </TouchableOpacity>
      </View>

      <View style={Tw`left-32px h-15%`}>
            <TouchableOpacity   style={Tw`flex items-center justify-center bg-[#D6F22C] shadow-md  rounded-5px  w-80% h-57px`}>
                <Text style={[Tw`text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"600"}]}>Share Location</Text>
            </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default LocationScreen