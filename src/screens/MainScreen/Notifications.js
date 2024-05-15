import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Textfield from '../../Components/Textfield';
import Color from '../../theme/colors/Color';
import CustomButton from '../../Components/Button';
import MyHeader from '../../Components/Header';

const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Textfield
        text={'New Notifications '}
        size={24}
        styles={styles.headerTxt}
      />
      <View style={styles.boookingContainer}>
        <Textfield text={'Booking Confirmed'} textColor={Color.primary} size={22} styles={styles.titletxt}/>
        <Textfield text={'Dear Ali, your booking is confirmed for 9P671 (JED-MED) on 25 July at 9:45 PM.'} size={16}/>
      </View>
      <View style={styles.boookingContainer}>
        <Textfield text={'Booking Confirmed'} textColor={Color.primary} size={22} styles={styles.titletxt}/>
        <Textfield text={'Dear Ali, your booking is confirmed for 9P331 (MAK-JED) on 20 July at 3:45 PM.'} size={16}/>
      </View>
      <View style={styles.boookingContainer}>
        <Textfield text={'Booking Cancelled'} textColor={Color.primary} size={22} styles={styles.titletxt}/>
        <Textfield text={'Dear Ali, your booking is cancelled for 9P331 (MAK-JED) on 10 July at 3:45 PM.'} size={16}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  boookingContainer:{
    backgroundColor:Color.secondary,
    margin:7,
    padding:10,
    borderRadius:10,
  },
  headerTxt: {
    color: 'black',
    fontWeight: '600',
    paddingVertical: 30,
    textAlign: 'center',
  },
  titletxt:{
    fontWeight:'700',
  }
});

export default NotificationScreen;
