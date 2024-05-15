import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MyHeader from '../../Components/Header';
import Textfield from '../../Components/Textfield';
import Color from '../../theme/colors/Color';
import Icon from '../../theme/Icons';
import Images from '../../assets/Images';
import DatePicker from 'react-native-date-picker';
import CustomButton from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
const ModifyFlight = () => {
  const navigation = useNavigation();
  const [opendate1, setopendate1] = useState(false);
  const [isDateSelectedstart, setIsDateSelectedstart] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const formatDate = date => {
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const hanldeAvailableBuses = () => {
      navigation.navigate('Tracking');
  };
  return (
    <View style={styles.container}>
      <MyHeader isTitle={true} isButton={true} title={'Modify Flight'} />
      <Textfield text={'Current Bus'} size={20} styles={styles.busTitle} />
      <View style={styles.busDetailCard}>
        <View style={styles.busRoute}>
          <Icon
            name={'bus'}
            size={16}
            type={'font-awesome5'}
            color={Color.primary}
          />
          <Textfield
            text={'  JED-MED'}
            styles={styles.routeName}
            textColor={Color.primary}
            size={16}
          />
          <Textfield text={'SNR 4004'} styles={styles.busNo} size={18} />
        </View>
        <Textfield text={'Departure'} styles={styles.depTitle} size={18} />
        <View style={styles.flightDate}>
          <Textfield text={'Tue 25 jul 2024'} textColor="grey" />
          <Textfield text={'09:45'} textColor="grey" />
        </View>
        <Textfield text={'Arrival'} styles={styles.depTitle} size={18} />
        <View style={styles.flightDate}>
          <Textfield text={'Tue 25 jul 2024'} textColor="grey" />
          <Textfield text={'11:45'} textColor="grey" />
        </View>
      </View>
      <Textfield text={'New Bus'} size={20} styles={styles.newbusTitle} />
      <Textfield
        text={'Origin/Destination'}
        styles={styles.orignTxt}
        size={18}
        textColor="grey"
      />
      <View style={styles.busDestinationCard}>
        <View style={styles.originView}>
          <Icon name={'location'} size={20} type={'ionicon'} color={'green'} />
          <View style={styles.originTitle}>
            <Textfield text={' MAK'} size={20} />
            <Textfield text={'Makkah'} size={20} textColor="grey" />
          </View>
        </View>
        <Image
          source={Images.line}
          style={styles.lineimage}
          resizeMode="contain"></Image>
        <View style={styles.distinationView}>
          <Icon name={'location'} size={20} type={'ionicon'} color={'green'} />
          <View style={styles.originTitle}>
            <Textfield text={' MED'} size={20} />
            <Textfield text={'Jeddah'} size={20} textColor="grey" />
          </View>
        </View>
      </View>
      <Textfield text={'Date'} size={20} styles={styles.dateTitle} />
      <View style={styles.datecontainer}>
        <TouchableOpacity
          style={styles.dateButton1}
          onPress={() => setopendate1(true)}>
          <View style={styles.datefield}>
            <Icon
              name={'calendar-alt'}
              size={20}
              type={'font-awesome5'}
              color={'black'}
            />
            <Text style={styles.dateButtonText}>
              {isDateSelectedstart ? formatDate(date1) : 'Start Date'}{' '}
            </Text>
          </View>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="date"
          open={opendate1}
          date={date1}
          onConfirm={date => {
            setopendate1(false);
            setDate1(date);
            setIsDateSelectedstart(true);
          }}
          onCancel={() => {
            setopendate1(false);
          }}
        />
      </View>
      <CustomButton title={'Show Available Bus'}style={styles.bussBtn}onPress={hanldeAvailableBuses}/>
    </View>
  );
};

export default ModifyFlight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Color.white,
  },
  busTitle: {
    paddingHorizontal: 20,
    paddingTop: 50,
    fontWeight: '500',
  },
  busDetailCard: {
    width: '95%',
    height: '24%',
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    padding: 20,
  },
  depTitle: {
    paddingTop: 20,
    fontWeight: '500',
  },
  busRoute: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  routeName: {
    color: Color.primary,
  },
  busNo: {
    paddingLeft: 145,
    fontWeight: '600',
  },
  flightDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orignTxt: {
    paddingHorizontal: 20,
  },
  originView: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  distinationView: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  busDestinationCard: {
    width: '95%',
    height: '15%',
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  newbusTitle: {
    paddingHorizontal: 20,
    paddingTop: 20,
    fontWeight: '500',
  },
  lineimage: {
    marginLeft: 9.5,
    bottom: 5,
    height: 25,
  },
  originTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTitle: {
    paddingHorizontal: 10,
    paddingTop:10
  },
  datecontainer: {
    flexDirection: 'row',
    width: '95%',
    height: '7%',
    marginBottom: 10,
    borderRadius: 20,
    alignSelf:'center'
  },
  dateButton1: {
    padding: 10,
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: 'grey',
    justifyContent:'center',
    alignSelf:'center'
  },
  datefield: {
    flexDirection: 'row',
     alignItems: 'center',
     paddingHorizontal:10,
},
  dateButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 10,
  },
  bussBtn:{
    width:"95%"
  }
});
