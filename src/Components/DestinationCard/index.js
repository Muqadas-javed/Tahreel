import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Images from '../../assets/Images';
import Textfield from '../Textfield';

const DestinationCard = ({source, from, desTxt, desTxt1, desTxt2}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.ImageView}>
        <FastImage source={source} resizeMode="contain" style={styles.desImage}>
          <Textfield
            text={from}
            textColor="white"
            size={15}
            styles={styles.imageTxt}
          />
        </FastImage>
        <View>
          <View style={styles.flight1}>
            <Textfield text={desTxt} size={8} styles={styles.fromTxt} />
            <Textfield text={'Upto 75 SAR'} size={8} />
          </View>
          {/* <Image source={Images.stLine} style={styles.lineImage}/> */}
          <View style={{height: 0.5, width: '100%', backgroundColor: 'gray'}} />
          <View style={styles.flight1}>
            <Textfield text={desTxt1} size={8} styles={styles.fromTxt} />
            <Textfield text={'Upto 50 SAR'} size={8} />
          </View>
          {/* <Image source={Images.stLine} style={styles.lineImage}/> */}
          <View style={{height: 0.5, width: '100%', backgroundColor: 'gray'}} />
        </View>
        <View style={styles.flight1}>
          <Textfield text={desTxt2} size={8} styles={styles.fromTxt} />
          <Textfield text={'Upto 80 SAR'} size={8} />
        </View>
      </View>
    </View>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({
  ImageView: {
    marginVertical: 10,
    height: 146,
    backgroundColor: '#F2F9F6',
    elevation: 10,
    borderRadius: 10,
  },
  desImage: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  conatiner: {
    // alignItems:'center'
  },
  imageTxt: {
    fontWeight: '600',
  },
  flight1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  fromTxt: {
    fontWeight: '700',
  },
  lineImage: {
    width: '99%',
  },
});
