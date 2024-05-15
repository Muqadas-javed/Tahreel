import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import Images from '../../assets/Images';
import Textfield from '../../Components/Textfield';
import MyHeader from '../../Components/Header';
import Color from '../../theme/colors/Color';
import Icon from '../../theme/Icons';

const Tracking = () => {
  return (
    <View style={styles.container}>
      <MyHeader isTitle={true} isButton={true} title={'Tracking'} />
      <ImageBackground source={Images.map} style={styles.backgroundImage}>
        <View style={styles.bottomView}>
          <View style={styles.peronImage}>
            <Image source={Images.round} style={styles.roundImage} />
            <Image source={Images.person} style={styles.personImage} />
          </View>
          <View style={styles.infoContainer}>
            <Textfield text={'Ali'} styles={styles.nameTxt} size={24} />
            <Textfield text={'JED - MED'} />
          </View>
          <View style={styles.flightInfo}>
            <Icon
              name={'location'}
              size={24}
              type={'ionicon'}
              color={'green'}
            />
            <Textfield text={' Origin: '} size={20} styles={styles.originTxt} />
            <Textfield text={' Jeddah, Saudi Arabia'} size={20} textColor='grey'/>
          </View>
          <Image
          source={Images.line}
          style={styles.lineimage}
          resizeMode="contain"></Image>
          <View style={styles.flightInfo1}>
            <Icon
              name={'location'}
              size={24}
              type={'ionicon'}
              color={'green'}
            />
            <Textfield
              text={' Destination: '}
              size={20}
              styles={styles.originTxt}
            />
            <Textfield text={'  Madina, Saudi Arabia'} size={20} textColor='grey'/>
          </View>
          <Textfield text={'SNR 4004 - On Time (Arriving in 20 mins)'} size={18} textColor={Color.primary}/>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.white,
    height: '40%',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    padding: 20,
  },
  roundImage: {
    position: 'absolute',
    top: -90,
    width: 130,
    height: 130,
  },
  personImage: {
    position: 'absolute',
    top: -65,
    width: 60,
    height: 80,
  },
  infoContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  peronImage:{
    alignItems:"center",
    
  },
  nameTxt: {
    fontWeight: '500',
  },
  flightInfo: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  lineimage: {
    marginLeft: 12,
    height: 27,
  },
  flightInfo1: {
    flexDirection: 'row',
    marginBottom:20,
  },
  originTxt: {
    fontWeight: '500',
  },
});

export default Tracking;
