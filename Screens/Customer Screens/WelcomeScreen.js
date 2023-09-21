import {StyleSheet, View, Text ,Image ,SafeAreaView , TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Tw from 'twrnc';
import  {TTFirsNeueTrlLight} from '../../assets/fonts/TT Firs Neue Trial Light.ttf';
import { EvilIcons } from '@expo/vector-icons'; 


const WelcomeScreen = () => {
    const navigation = useNavigation();

    const openWithGoogle=()=>{

    }

    const openWithFacebook=()=>{

    }

    const styles = StyleSheet.create({
        thinBorder: {
          flex: 1,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: '#000000',
        },
    });

    return (
    <SafeAreaView style={Tw`bg-[#FCFCFC] h-100%`}>
        
        {/* Qr cabs image   */}
        <View style={Tw`items-center h-37% bg-[#d6f22c] justify-center`}>
            <TouchableOpacity onPress={()=>navigation.navigate('Help')} style={[Tw`absolute z-1 top-32px flex-row border p-1 left-256px rounded-sm`, { borderColor: '#0b4348' }]}>
                <EvilIcons name="question" size={24} color="#0b4348" />
                <Text style={[Tw`text-[#0b4348] text-16px font-normal`,{fontFamily: TTFirsNeueTrlLight}]}>Help</Text>
            </TouchableOpacity>

            <Image style={[Tw`mt-10  w-45% h-45%`,{resizeMode:"contain"}]} source={require('../../assets/images/QRCabs-image.png')}></Image>
        </View>

        <View style={Tw`items-center mt-5`}>
            <Text style={[Tw`text-24px font-light text-[#282828]`,{fontFamily: TTFirsNeueTrlLight}]}>Welcome to QR Cabs</Text>

            
            <TouchableOpacity onPress={()=>navigation.navigate('MobileNumber')}  style={Tw`mt-10 flex items-center justify-center bg-[#D6F22C] shadow-md  rounded-5px  w-80% h-57px`}>
                <Text style={[Tw`text-16px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"600"}]}>Continue with mobile number</Text>
            </TouchableOpacity>

            <View style={Tw`flex-row items-center w-80% mt-10`}>
                <View style={styles.thinBorder} ></View>
                <Text style={Tw`mx-3`} > OR </Text>
                <View style={styles.thinBorder} ></View>
            </View>

            {/*  register with google or facebook  */}
            <View style={[Tw`mt-10 `,{gap:19}]}>
                <TouchableOpacity onPress={openWithGoogle} style={[Tw`flex-row items-center bg-[#FFFFFF] shadow-md w-151px h-48px px-12px rounded-2px`,{gap:8}]}>
                    <Image style={Tw`h-24px w-24px`} source={require('../../assets/images/google.png')}></Image>
                    <Text style={[Tw`text-14px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight , fontWeight:"600"}]}> Google</Text>
                </TouchableOpacity> 

                <TouchableOpacity onPress={openWithFacebook} style={[Tw`flex-row items-center bg-[#FFFFFF] shadow-md w-151px h-48px px-12px rounded-2px`,{gap:8}]}>
                    <Image style={Tw`h-24px w-24px`} source={require('../../assets/images/facebook.png')} ></Image>
                    <Text style={[Tw`text-14px text-[#282828]`,{fontFamily: TTFirsNeueTrlLight , fontWeight:"600"}]} > Facebook</Text>
                </TouchableOpacity>
            </View>             

        </View>


    </SafeAreaView>
  )
}

export default WelcomeScreen