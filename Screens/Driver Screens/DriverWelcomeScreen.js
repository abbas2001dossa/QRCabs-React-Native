import {SafeAreaView,Button,TextInput,TouchableOpacity, View,Image, Text,ScrollView, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Tw from 'twrnc';
import  {TTFirsNeueTrlLight} from '../../assets/fonts/TT Firs Neue Trial Light.ttf';
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import DatePicker from 'react-native-date-picker'

const DriverWelcomeScreen = () => {
    const [DriverFirstName , setDriverFirstName]=useState('');
    const [DriverLastName , setDriverLastName]=useState('');
    const [DriverReferralCode , setDriverReferralCode]=useState('');
    const [DriverDateOfBirth , setDriverDateOfBirth]=useState('');
    const [DriverGender , setDriverGender]=useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

  return (
    <SafeAreaView>
        <ScrollView>

            {/* intro */}
            <View style={Tw`left-16px flex-col mt-10`}>
                <Text style={[Tw`text-24px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>Welcome to QR Cabs</Text>
                <Text style={[Tw`mt-2 text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"300"}]}>Enter your details</Text>
            </View>

            <View style={Tw`mt-5 h-70px  left-16px w-90%`}>
                <Text style={[Tw`text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>First Name</Text>
                <TextInput value={DriverFirstName} onChangeText={(text)=>setDriverFirstName(text)} style={Tw`p-10px mt-2 h-37px rounded-5px w-90% border`} placeholder='Enter your first name '></TextInput>
            </View>

            <View style={Tw`mt-5 h-70px  left-16px w-90%`}>
                <Text style={[Tw`text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>Last Name</Text>
                <TextInput value={DriverLastName} onChangeText={(text)=>setDriverLastName(text)} style={Tw`p-10px mt-2 h-37px rounded-5px w-90% border`} placeholder='Enter your last name '></TextInput>
            </View>

            <View style={Tw`mt-5 h-200px  left-16px w-90%`}>
                <Text style={[Tw`text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"400"}]}>Date of birth {'(We give birthday gift rides in future)'}</Text>
                <Button title="Open" onPress={() => setOpen(true)} />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false);
                        setDate(date);
                        setDriverDateOfBirth(date);
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
                    mode='date'
                />






            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default DriverWelcomeScreen;