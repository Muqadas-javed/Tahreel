import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textfield from '../../Components/Textfield';
import Icon from '../../theme/Icons';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../Components/Button';
const BookingScreen = () => {
  const navigation = useNavigation();
  const handleTracking = () => {
    navigation.navigate('ModifyFlight');
  };
  return (
    <View style={styles.container}>
      <Textfield text={'Scheduled Buses'}styles={styles.headerTxt}size={22}/>
      <View style={styles.infocard}>
      <Textfield text={'SNR 4004'}size={18}/>
      <Textfield text={'Departing'} styles={styles.flightStatus} size={18}/>
      <View style={styles.busInfo}>
      <Icon
          name={'bus'}
          size={16}
          type={'font-awesome5'}
          color={Color.primary}
        />
        <Textfield text={'  JED - MED '}/>
        <Textfield text={'9p671'} styles={styles.busNo}/>
        <Textfield text={'Tue 18 jul   '}/>
        <Icon 
          name={'checkmark-done-circle-sharp'}
          size={18}
          type={'ionicon'}
          color={Color.primary}
        />
        <Textfield text={'Started'}/>
      </View>
      <View style={styles.busFlight}>
      <Textfield text={'1 pax(s)'} styles={styles.busDetail}/>
      <Textfield text={'     09:45'}/>
      </View>
      <CustomButton title={'Start Tracking'}style={styles.trackingBtn}onPress={handleTracking}/>
      </View>
      <View style={styles.infocard}>
      <Textfield text={'SNR 5398'}size={18}/>
      <Textfield text={'Departing'} styles={styles.flightStatus} size={18}/>
      <View style={styles.busInfo}>
      <Icon
          name={'bus'}
          size={16}
          type={'font-awesome5'}
          color={Color.primary}
        />
        <Textfield text={' MAK - MED'}/>
        <Textfield text={'9p671'} styles={styles.busNo}/>
        <Textfield text={'Tue 18 jul   '}/>
        <Icon 
          name={'checkmark-done-circle-sharp'}
          size={18}
          type={'ionicon'}
          color={Color.primary}
        />
        <Textfield text={'Confirm'}/>
      </View>
      <View style={styles.busFlight}>
      <Textfield text={'2 pax(s)'} styles={styles.busDetail}/>
      <Textfield text={'     09:45'}/>
      </View>
      <CustomButton title={'View Ticket'}style={styles.trackingBtn}onPress={handleTracking}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal:10,
    backgroundColor: 'white',
  },
  headerTxt: {
    fontWeight: '500',
    marginVertical:20,
  },
  infocard:{
    width:"90%",
    height:"27%",
    marginTop:20,
    padding:15,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    shadowOpacity: 0.9, 
    shadowRadius: 4,
  },
  flightStatus:{
    fontWeight: '500',
    paddingVertical:10,
  },
  busInfo:{
    flexDirection:"row",
  },
  busNo:{
  paddingHorizontal:15,
},
busFlight:{
  flexDirection:'row',
},
busDetail:{
  paddingLeft:90,
},
  trackingBtn:{
    width:"100%",
    marginTop:12,
  },
});

export default BookingScreen;
