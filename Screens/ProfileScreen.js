import { TextInput,TouchableOpacity,SafeAreaView,Image,View, Text ,KeyboardAvoidingView,Alert} from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import  {TTFirsNeueTrlLight} from '../assets/fonts/TT Firs Neue Trial Light.ttf';
import { EvilIcons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 


const ProfileScreen = () => {

    const [name,setName]=useState('');
    const navigation=useNavigation();
    const [maleChecked,setMaleChecked]=useState(false);
    const [femaleChecked,setFemaleChecked]=useState(false);
    const [otherChecked,setOtherChecked]=useState(false);
    const [email,setEmail]=useState('');
    const [referralCode,setReferralCode]=useState('');
    const [WhatsappCheckBoxmark,setWhatsappCheckBoxmark]=useState(false);
    const [gender,setGender]=useState('');

    useEffect(() => {
        if (maleChecked) {
            setGender("Male");
        } else if (femaleChecked) {
            setGender("Female");
        } else if (otherChecked) {
            setGender("Others");
        } else {
            setGender(""); 
        }
    }, [maleChecked,femaleChecked,otherChecked]);
    


    const submit=()=>{
        if(gender && name && email ){
            navigation.navigate('Location');
        }else{
            Alert.alert("Invalid Input","Fill out the Input fields ");
        }
    };

  return (
    <SafeAreaView style={Tw`bg-[#FFFFFF] h-100%`}>
      
      {/* header */}
      <View style={Tw` h-180px bg-[#d6f22c] `}>
        <TouchableOpacity onPress={()=>navigation.navigate('Help')} style={[Tw`absolute z-1 top-32px flex-row border p-1 left-256px rounded-sm`, { borderColor: '#0b4348' }]}>
          <EvilIcons name="question" size={24} color="#0b4348" />
          <Text style={[Tw`text-[#0b4348] text-16px font-normal`,{fontFamily: TTFirsNeueTrlLight}]}>Help</Text>
        </TouchableOpacity> 
        
        
        <View style={Tw`flex-col mt-20 left-18px`}>
            <Image source={require('../assets/images/account.png')} style={Tw`w-32px h-40px`}></Image>
            <View style={[Tw`w-221px h-29px mt-2`,{gap:8}]}>
                <Text style={[Tw`text-24px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"300"}]}>Create your profile</Text>
            </View>
        </View>
      </View>

      
      <KeyboardAvoidingView
        style={Tw`flex-1`} // Use flex-1 to make sure content takes up all available space
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on platform
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150} // Customize vertical offset as needed
      >

        {/*  profile text input  */}
        <View style={[Tw`left-16px mt-5 border rounded-10px w-328px h-49px`, { borderColor: "#0b4348", gap: 32, padding: 12 }]}>
          <TextInput
            onChangeText={(text) => setName(text)} 
            value={name}
            style={[Tw`text-16px text-[#282828]`, { fontFamily: TTFirsNeueTrlLight, fontWeight: "400" }]}
            placeholder='Enter your Name'
          />
        </View>

        {/* genders */}
        <View style={Tw`w-311px h-83px left-16px  mt-5`}>
            <Text style={[Tw`text-20px w-75px h-32px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight, fontWeight: "300"}]}>Gender</Text>
            <View style={[Tw`flex-row h-50px mt-3`,{gap:35}]}>
                <TouchableOpacity onPress={()=>setMaleChecked(!maleChecked)} style={[Tw`border w-82px h-40px rounded-5px p-12px flex-row`,{gap:4 , borderColor: "#0b4348" ,backgroundColor: maleChecked ? '#d6f22c' : '#FFFFFF'}]}>
                    <Foundation name="male-symbol" size={16} color="#0b4348" />
                    <Text style={[Tw`text-12px text-[#282828]`, { fontFamily: TTFirsNeueTrlLight, fontWeight: "400" }]}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFemaleChecked(!femaleChecked)} style={[Tw`border w-82px h-40px rounded-5px p-12px flex-row`,{gap:4 , borderColor: "#0b4348",backgroundColor: femaleChecked ? '#d6f22c' : '#FFFFFF'}]}>
                    <Foundation name="female-symbol" size={16} color="#0b4348" />
                    <Text style={[Tw`text-12px text-[#282828]`, { fontFamily: TTFirsNeueTrlLight, fontWeight: "400" }]}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setOtherChecked(!otherChecked)} style={[Tw`border w-82px h-40px rounded-5px p-12px flex-row`,{gap:4 , borderColor: "#0b4348",backgroundColor: otherChecked ? '#d6f22c' : '#FFFFFF'}]}>
                    <Foundation name="male-symbol" size={16} color="#0b4348" />
                    <Text style={[Tw`text-12px text-[#282828]`, { fontFamily: TTFirsNeueTrlLight, fontWeight: "400" }]}>Others</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* email */}
        <View style={[Tw`left-16px mt-5 border rounded-10px w-328px h-49px`, { borderColor: "#0b4348", gap: 32, padding: 12 }]}>
          <TextInput
            
            onChangeText={(text) => setEmail(text)} 
            value={email}
            style={[Tw`text-16px text-[#282828]`, { fontFamily: TTFirsNeueTrlLight, fontWeight: "400" }]}
            placeholder='Enter your Email id'
            keyboardType='email-address'
          />
        </View>

        {/* referralcode  */}
        <View style={[Tw`left-16px mt-5 border rounded-10px w-328px h-49px`, { borderColor: "#0b4348", gap: 32, padding: 12 }]}>
          <TextInput
            onChangeText={(text) => setReferralCode(text)} 
            value={referralCode}
            style={[Tw`text-16px text-[#282828]`, { fontFamily: TTFirsNeueTrlLight, fontWeight: "400" }]}
            placeholder='Referral code (optional)'
          />
        </View>

        {/* checker */}
        <View style={[Tw`flex-row h-38px w-328px mt-5  left-16px items-center`,{gap:16}]}>
            <MaterialCommunityIcons onPress={()=>setWhatsappCheckBoxmark(!WhatsappCheckBoxmark)} name={WhatsappCheckBoxmark? "checkbox-marked" : "checkbox-blank-outline"} size={30} color="black" />
            <Text style={[Tw`text-12px text-[#282828]`,{fontWeight:"300",fontFamily: TTFirsNeueTrlLight, maxWidth: 260}]}>Recieve notifications through whatsapp</Text>
        </View>

        {/* submit */}
        <View style={Tw`left-32px mt-30`}>
            <TouchableOpacity onPress={submit}  style={Tw`flex items-center justify-center bg-[#D6F22C] shadow-md  rounded-5px  w-80% h-57px`}>
                <Text style={[Tw`text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"600"}]}>Submit</Text>
            </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

        

    </SafeAreaView>
  )
}

export default ProfileScreen;