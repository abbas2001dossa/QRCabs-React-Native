import { View, Text ,Image ,SafeAreaView , TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Tw from 'twrnc';


const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
    <SafeAreaView style={Tw`bg-[#FCFCFC] h-100%`}>
        
        {/* Qr cabs image   */}
        <View style={Tw`items-center`}>
            <Image style={Tw`mt-10  w-70 h-70 `} source={require('../assets/images/QRCabs-image.png')}></Image>
        </View>

        <View style={Tw`items-center mt-5`}>
            <Text style={Tw`text-24px font-montserrat font-normal text-[#282828]`}>Welcome to QRCabs</Text>

            
            <TouchableOpacity style={Tw`mt-10 flex items-center justify-center bg-[#D6F22C] shadow-md w-296px rounded-5px h-57px`}>
                <Text style={Tw`text-16px font-montserrat font-normal text-[#282828]`}>Continue with phone number</Text>
            </TouchableOpacity>
            
        </View>


    </SafeAreaView>
  )
}

export default WelcomeScreen