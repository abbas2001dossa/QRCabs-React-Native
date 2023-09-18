import { View, Text ,SafeAreaView , Image , TouchableOpacity, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import Tw from 'twrnc';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SelectLanguage = () => {

    const [radioButtonTelugu,setRadioButtonTelugu]=useState(false); 
    const [radioButtonEnglish,setRadioButtonEnglish]=useState(true);
    const [radioButtonHindi,setRadioButtonHindi]=useState(false);
    const [language,setLanguage]=useState("");
    const navigation = useNavigation();

    useEffect(() => {
        if (radioButtonEnglish) {
            setLanguage('English');
          } else if (radioButtonHindi) {
            setLanguage('Hindi');
          } else if (radioButtonTelugu) {
            setLanguage('Telugu');
          }
    }, [radioButtonEnglish,radioButtonHindi,radioButtonTelugu]);
    

    const navigateTowelcome=()=>{
        const selectedCount = [radioButtonTelugu, radioButtonEnglish, radioButtonHindi].filter(Boolean).length;
        if(selectedCount===1){
            navigation.navigate('Welcome');
        }else{
            Alert.alert("Invalid Language Prompt","PLease Select Only One Language ! ");
        }
    }

    // console.log(language);
  return (
    <SafeAreaView style={Tw`bg-[#FCFCFC] h-100%`}>

        {/* Qr cabs image   */}
      <View style={Tw`items-center`}>
        <Image style={Tw`mt-10  w-70 h-70 `} source={require('../assets/images/QRCabs-image.png')}></Image>
      </View>

      {/*  choose languague  */}
      <View>
        
        <View style={Tw`flex-row items-center`}>
            <Text style={Tw`text-24px font-montserrat font-light flex-1 text-black-500 ml-5`} > Select Language</Text>
            <Image style={Tw`h-8 w-8 mr-5`} source={require('../assets/images/langaugeSymbol.png')}></Image> 
        </View>
            
        <View style={Tw`flex-col mt-5`}>
            <View style={Tw`flex-row p-3 ml-4`}>
                <Fontisto  onPress={()=> setRadioButtonTelugu(!radioButtonTelugu)}  name={radioButtonTelugu ? "radio-btn-active" :"radio-btn-passive"} size={20} color="#004d4d" />
                <Text style={Tw`mx-2 text-16px font-montserrat font-light text-[#282828]`}> Telugu </Text>
            </View>
            <View style={Tw`flex-row p-3 ml-4`}>
                <Fontisto onPress={()=> setRadioButtonEnglish(!radioButtonEnglish)}  name={radioButtonEnglish ? "radio-btn-active" :"radio-btn-passive"} size={20} color="#004d4d" />
                <Text style={Tw`mx-2 text-16px font-montserrat font-light text-[#282828]`}> English </Text>
            </View>
            <View style={Tw`flex-row p-3 ml-4`}>
                <Fontisto onPress={()=> setRadioButtonHindi(!radioButtonHindi)}  name={radioButtonHindi ? "radio-btn-active" :"radio-btn-passive"} size={20} color="#004d4d" />
                <Text style={Tw`mx-2 text-16px font-montserrat font-light text-[#282828]`}> Hindi </Text>
            </View>
        </View>     
        
      </View>

      <View style={Tw`items-center mt-30`}>
        <TouchableOpacity onPress={()=> navigateTowelcome()} style={Tw`flex items-center justify-center bg-[#D6F22C] shadow-md w-296px rounded-5px h-57px`}>
           <Text style={Tw`text-16px font-montserrat font-normal text-[#282828]`}> Confirm </Text> 
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SelectLanguage;