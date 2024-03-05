import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Textfield from '../../Components/Textfield';
import CustomButton from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
function Thank({route}) {
  const navigation = useNavigation();
  const handleExplore=()=>{
   navigation.navigate('Main')
  }
  const { cardName } = route.params;
  return (
    <View style={styles.container}>
      <LottieView
      style={styles.lottieImage}
        source={require('../../Lottie/done.json')}
        autoPlay
        loop
      />
      <Textfield text={'Thank you'} size={28} styles={styles.thankTxt}/>
      <Textfield text={'Your booking has been placed '} size={18} styles={styles.msgTxt}/>
      <Textfield text={`${cardName}`} size={18}/>
      <CustomButton title={'Explore More..'} style={styles.exploreBtn} onPress={handleExplore}/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    lottieImage:{
      height:200,
      width:200,
      marginTop:170,
    },
    thankTxt:{
      padding:10,
    },
    msgTxt:{
padding:6,
    },
    exploreBtn:{
      marginTop:80,
    }
  });
export default Thank;