import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from '../../theme/Icons';
import MyHeader from '../../Components/Header';
import Color from '../../theme/colors/Color';
import Images from '../../assets/Images';
import Textfield from '../../Components/Textfield';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../Components/Button';
const CardDetail = () => {
  const navigation = useNavigation();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleConfirmBooking = () => {
    if (selectedCard) {
      navigation.navigate('Payment');
    }
  };
  return (
    <>

      <MyHeader isTitle={true}isButton={true} title={'Request for Rent'} />
    <ScrollView style={styles.container}>
      <View style={styles.belowheader}>
        <Icon name={'location'} size={20} type={'ionicon'} color={'red'} />
        <View style={styles.locationCon}>
          <Text style={styles.locationTxt}>MAK</Text>
          <Text style={styles.locationsubTxt}>Makkah, Saudia Arabia</Text>
        </View>
      </View>
      <Image
        source={Images.line}
        style={styles.lineimage}
        resizeMode="contain"></Image>
      <View style={[styles.navigation, {bottom: 15}]}>
        <Icon name={'location'} size={20} type={'ionicon'} color={'green'} />
        <View style={styles.locationCon}>
          <View style={styles.dottedRow}>
            <Text style={styles.locationTxt}>MED</Text>
            <Textfield text={'1.1km'} />
          </View>
          <Text style={styles.locationsubTxt}>Makkah, Saudia Arabia</Text>
        </View>
      </View>
      <View style={styles.businfo}>
        <Textfield text={'Al makkah'} size={20} />
        <View style={styles.routedateconatiner}>
          <Icon
            name={'star'}
            size={20}
            type={'font-awesome'}
            color={'#FBC02D'}
          />
          <Textfield text={' 4.9 (531 reviews)'} textColor="grey" />
        </View>
        <Image source={Images.bus1} style={styles.busimage}></Image>
      </View>
      <View style={styles.facilities}>
        <Icon
          name={'ticket'}
          size={28}
          type={'material-community'}
          color={Color.primary}
        />
        <Textfield text={'Ticket Price'} />
        <Image source={Images.dottedline} style={styles.dottedline}></Image>
        <Textfield text={'75 SAR'} />
      </View>
      <View style={styles.facilities}>
        <Icon
          name={'event-seat'}
          size={28}
          type={'MaterialIcon'}
          color={Color.primary}
        />
        <Textfield text={'Seating'} />
        <Image source={Images.dottedline} style={styles.dottedline}></Image>
        <Textfield text={'C-20'} />
      </View>
      <View style={styles.facilities}>
        <Icon
          name={'restaurant'}
          size={28}
          type={'MaterialIcon'}
          color={Color.primary}
        />
        <Textfield text={'Refeshments'} />
        <Image source={Images.dottedline} style={styles.dottedline}></Image>
        <Textfield text={'Available'} />
      </View>
      <Textfield
        text={'Select payment method'}
        size={22}
        styles={styles.paymentTxt}
      />
      <TouchableOpacity
        style={[
          styles.cardDetail,
          selectedCard === 'visa' ? styles.selectedCard : null,
        ]}
        onPress={() => setSelectedCard('visa')}>
        <View>
          <Image source={Images.visa} style={styles.cardimage} />
        </View>
        <View style={styles.cardTxtConatiner}>
          <Textfield
            text={'**** **** **** 8970'}
            styles={styles.cardTxt}
            size={20}
          />
          <Textfield text={'Expires: 12/26'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[
          styles.cardDetail,
          selectedCard === 'master' ? styles.selectedCard : null,
        ]}
        onPress={() => setSelectedCard('master')}>
        <View>
          <Image source={Images.master} style={styles.cardimage} />
        </View>
        <View style={styles.cardTxtConatiner}>
          <Textfield
            text={'**** **** **** 8970'}
            styles={styles.cardTxt}
            size={20}
          />
          <Textfield text={'Expires: 12/26'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[
          styles.cardDetail,
          selectedCard === 'paypal' ? styles.selectedCard : null,
        ]}
        onPress={() => setSelectedCard('paypal')}>
        <View>
          <Image source={Images.paypal} style={styles.cardimage} />
        </View>
        <View style={styles.cardTxtConatiner}>
          <Textfield
            text={'mailaddress@mail.com'}
            styles={styles.cardTxt}
            size={20}
          />
          <Textfield text={'Expires: 12/26'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[
          styles.cardDetail,
          selectedCard === 'payment' ? styles.selectedCard : null,
        ]}
        onPress={() => setSelectedCard('payment')}>
        <View>
          <Image source={Images.payment} style={styles.cardimage} />
        </View>
        <View style={styles.cardTxtConatiner}>
          <Textfield text={'Cash'} styles={styles.cardTxt} size={20} />
          <Textfield text={'Expires: 12/26'} />
        </View>
      </TouchableOpacity>
      <CustomButton
        title={'Confirm Booking'}
        style={[styles.bookingBtn, selectedCard ? styles.enabledBtn : null]}
        onPress={handleConfirmBooking}
        disabled={!selectedCard} // Disable button if no card is selected
      />
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  belowheader: {
    flexDirection: 'row',
    marginTop: 15,
  },
  navigation: {
    flexDirection: 'row',
  },
  dottedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  locationTxt: {
    color: Color.black,
  },
  locationsubTxt: {
    color: Color.grey,
  },
  lineimage: {marginLeft: 10, bottom: 15, height: 35},
  busimage: {
    height: 70,
    width: 120,
    position: 'absolute',
    right: 10,
  },
  businfo: {
    height: 80,
    backgroundColor: Color.secondary,
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingTop: 15,
    marginBottom: 17,
    marginTop: 10,
  },
  routedateconatiner: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  facilities: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    height: 46,
  },
  dottedline: {
    width: 80,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  paymentTxt: {
    paddingTop: 40,
  },
  cardDetail: {
    flexDirection: 'row',
    height: 70,
    padding: 15,
    backgroundColor: Color.secondary,
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    opacity: 0.3,
  },
  selectedCard: {
    opacity: 2,
    
  },
  cardimage: {
    height: 40,
    width: 50,
    resizeMode: 'contain',
  },
  cardTxtConatiner: {
    paddingHorizontal: 10,
  },
  cardTxt: {
    fontWeight: '400',
  },
  bookingBtn: {
    width: '95%',
    height: 50,
    marginTop: 20,
    opacity:0.4,
  },
  enabledBtn: {
    opacity:1,
  },
});

export default CardDetail;
