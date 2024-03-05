import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Images from '../../assets/Images';
import Textfield from '../Textfield';

const DestinationCard = ({source, from}) => {
  return (
    <View style={styles.conatiner}>
      <FastImage
        source={source}
        resizeMode="contain"
        style={styles.desImage}>
        <Textfield text={from} textColor='red' size={20}/>
      </FastImage>
      <Textfield/>
    </View>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({
    desImage:{
        width:100,
        height:200,
        resizeMode:"cover",
        alignItems:'center',
        justifyContent:'center'
    },
    conatiner:{
        // alignItems:'center'
    }
});
