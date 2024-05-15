import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import Images from '../../assets/Images';
import CustomButton from '../Button';
import Color from '../../theme/colors/Color';
import Textfield from '../Textfield';
import Icon from '../../theme/Icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    image: Images.favJou,
    title: 'Jeddah-Makkah-Madina Trek',
    place: 'JED -MAK - MED',
    price: '1000 SAR',
  },
  {
    id: 2,
    image: Images.favJou,
    title: 'Riyadh-Madina-Jeddah Trek',
    place: 'RIY -MED - JED',
    price: '1200 SAR',
  },
];

const CardItem = ({ item, navigation }) => (
  <View style={styles.card}>
    <FastImage
      style={styles.image}
      source={item.image}
      resizeMode={FastImage.resizeMode.contain}
    />
    <Textfield
      text={item.title}
      styles={styles.title}
      textColor={Color.primary}
      size={14}
    />
    <View style={styles.placeView}>
      <Icon name={'location'} size={13} type={'ionicon'} color={'green'} />
      <Textfield text={item.place} size={12} />
      <View style={styles.priceView}>
        <Icon name={'torah'} size={10} type={'font-awesome5'} color={'green'} />
        <Textfield text={item.price} size={12} />
      </View>
    </View>
    <View style={styles.btnView}>
      <CustomButton
        title={'View Details'}
        style={styles.detButton}
        onPress={() => navigation.navigate('detail')}
      />
    </View>
  </View>
);

const FlatListWithCard = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => <CardItem item={item} navigation={navigation} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 6,
    height: 210,
    width: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  image: {
    height: 100,
    width: 180,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Color.primary,
  },
  placeView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
  },
  priceView: {
    flexDirection: 'row',
    paddingLeft: 17,
    alignItems: 'center',
  },
  detButton: {
    padding: 5,
    borderRadius: 4,
    alignItems: 'center',
    height: 30,
    width: 145,
  },
});

export default FlatListWithCard;
