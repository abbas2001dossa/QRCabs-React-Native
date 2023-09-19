import { View, Text ,SafeAreaView , Image , TouchableOpacity, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import Tw from 'twrnc';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons'; 
import  {TTFirsNeueTrlLight} from '../assets/fonts/TT Firs Neue Trial Light.ttf';

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
      <View style={Tw`items-center h-33% bg-[#d6f22c] justify-center`}>
        
        <TouchableOpacity onPress={()=>navigation.navigate('Help')} style={[Tw`absolute z-1 top-32px flex-row border p-1 left-256px rounded-sm`, { borderColor: '#0b4348' }]}>
          <EvilIcons name="question" size={24} color="#0b4348" />
          <Text style={[Tw`text-[#0b4348] text-16px font-normal`,{fontFamily: TTFirsNeueTrlLight}]}>Help</Text>
        </TouchableOpacity>
        
        <Image style={[Tw`mt-10  w-20% h-20%`,{resizeMode:"contain"}]} source={require('../assets/images/QRCabs-image.png')}></Image>
      </View>

      {/*  choose languague  */}
      <View>
        
        <View style={Tw`flex-col mt-2 ml-5 `}>
            <Image style={Tw`h-8 w-8 mr-5 my-2`} source={require('../assets/images/langaugeSymbol.png')}></Image> 
            <Text style={[Tw`text-24px text-[#0b4348] font-normal`,{fontFamily: TTFirsNeueTrlLight}]} > Select Language</Text>
        </View>
            
        <View style={Tw`flex-col mt-5 ml-5`}>
            <View style={Tw`flex-row p-3 `}>
                <Fontisto  onPress={()=> setRadioButtonTelugu(!radioButtonTelugu)}  name={radioButtonTelugu ? "radio-btn-active" :"radio-btn-passive"} size={20} color="#0b4348" />
                <Text style={[Tw`mx-2 text-16px font-light text-[#0b4348]`,{fontFamily: TTFirsNeueTrlLight}]}> Telugu </Text>
            </View>
            <View style={Tw`flex-row p-3`}>
                <Fontisto onPress={()=> setRadioButtonEnglish(!radioButtonEnglish)}  name={radioButtonEnglish ? "radio-btn-active" :"radio-btn-passive"} size={20} color="#0b4348" />
                <Text style={[Tw`mx-2 text-16px font-light text-[#0b4348]`,{fontFamily: TTFirsNeueTrlLight}]}> English </Text>
            </View>
            <View style={Tw`flex-row p-3 `}>
                <Fontisto onPress={()=> setRadioButtonHindi(!radioButtonHindi)}  name={radioButtonHindi ? "radio-btn-active" :"radio-btn-passive"} size={20} color="#0b4348" />
                <Text style={[Tw`mx-2 text-16px font-light text-[#0b4348]`,{fontFamily: TTFirsNeueTrlLight}]}> Hindi </Text>
            </View>
        </View>     
        
      </View>

      <View style={Tw`items-center mt-40`}>
        <TouchableOpacity onPress={()=> navigateTowelcome()} style={Tw`flex items-center justify-center bg-[#d6f22c] shadow-md  rounded-5px w-80% h-57px`}>
           <Text style={[Tw`text-16px  text-[#282828]`,{fontFamily: TTFirsNeueTrlLight,fontWeight:"600"}]}> Submit </Text> 
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SelectLanguage;