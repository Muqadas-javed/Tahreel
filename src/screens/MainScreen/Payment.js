import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyHeader from '../../Components/Header';
import Images from '../../assets/Images';
import Color from '../../theme/colors/Color';
import Textfield from '../../Components/Textfield';
import {useNavigation} from '@react-navigation/native';
import HTInput from '../../Components/InputField/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../Components/Button';

const Payment = () => {
  const navigation = useNavigation();
  const [cardName, setcardName] = useState('');
  const [cardNumber, setcardNumber] = useState('');
  const [cardDate, setcardDate] = useState('');
  const [cvv, setcardCvv] = useState('');
  const handleConfirmBooking = () => {
    navigation.navigate('Thank', {cardName});
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <MyHeader isTitle={true} isButton={true} title={'Payment'} />
      <View style={styles.cardcontainer}>
        <Image source={Images.card} style={styles.cardImage} />
        <Textfield
          text={'xxxx xxxx xxxx xxxx'}
          textColor="white"
          size={36}
          styles={styles.cardTxt}
        />
        <View style={styles.validContainer}>
          <View>
            <Textfield text={'VALID'} textColor="white" />
            <Textfield text={'THRU'} textColor="white" />
          </View>
          <Textfield
            text={'XX/XX'}
            textColor="white"
            styles={styles.cardNoTxt}
          />
        </View>
      </View>
      <View style={styles.inputConatiner}>
        <Textfield text={'Card Name'} size={22} />
        <HTInput
          placeholder={'Enter Card Name'}
          textColor={'black'}
          value={cardName}
          styles={styles.InputTxt}
          handleTextChange={text => setcardName(text)}
        />
      </View>
      <View style={styles.inputConatiner}>
        <Textfield text={'Card Number'} size={22} />
        <HTInput
          placeholder={'Enter Card No...'}
          textColor={'black'}
          styles={styles.InputTxt}
          handleTextChange={text => setcardNumber(text)}
        />
      </View>
      <View style={styles.cardDetail}>
        <View style={styles.inputConatiner}>
          <Textfield text={'Expiry Date'} size={22} />
          <HTInput
            placeholder={'Enter Card No...'}
            textColor={'black'}
            styles={styles.cardDetailTxt}
            handleTextChange={text => setcardDate(text)}
          />
        </View>
        <View style={styles.inputConatiner}>
          <Textfield text={'CVV'} size={22} />
          <HTInput
            placeholder={'cvv...'}
            textColor={'black'}
            value={cvv}
            secureTextEntry={true}
            styles={styles.cardDetailTxt}
            handleTextChange={text => setcardCvv(text)}
          />
        </View>
      </View>
      <CustomButton
        title={'Confirm Booking'}
        style={styles.bookingBtn}
        onPress={handleConfirmBooking}
      />
    </KeyboardAwareScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  cardcontainer: {
    backgroundColor: Color.primary,
    height: 180,
    borderRadius: 15,
    elevation: 15,
    marginVertical: 30,
    paddingLeft: 30,
    marginTop: 30,
  },
  cardImage: {
    marginTop: 30,
    marginHorizontal: 15,
  },
  cardTxt: {
    fontWeight: '600',
  },
  validContainer: {
    paddingHorizontal: 80,
    flexDirection: 'row',
  },
  cardNoTxt: {
    padding: 10,
  },
  inputConatiner: {
    paddingTop: 15,
  },
  InputTxt: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4, // Add elevation for shadow
    shadowOffset: {width: 0, height: 4}, // Change the shadow offset to lift from the bottom
    shadowOpacity: 0.3, // Reduce the opacity for a softer shadow
    shadowRadius: 4,
  },
  cardDetail: {
    flexDirection: 'row',
  },
  cardDetailTxt: {
    width: '64%',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  bookingBtn: {
    width: '95%',
    height: 50,
    marginTop: 40,
  },
});
