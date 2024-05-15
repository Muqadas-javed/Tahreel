import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import DestinationCard from '../../Components/DestinationCard';
import Images from '../../assets/Images';
import Textfield from '../../Components/Textfield';
import DatePicker from 'react-native-date-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../theme/colors/Color';
import Icon from '../../theme/Icons';
import FlatListWithCard from '../../Components/Journey';
import MyHeader from '../../Components/Header';
const ScheduleScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const items = ['Makkah', 'Madina', 'Jaddah', 'Riyad', 'Tabuk'];
  const [opendate1, setopendate1] = useState(false);
  const [isDateSelectedstart, setIsDateSelectedstart] = useState(false);
  const [date1, setDate1] = useState(new Date());
  let IconComponent = FontAwesome5;
  const formatDate = date => {
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const [selectedRoute, setSelectedRoute] = useState(null);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleViewDetail = () => {
    navigation.navigate('detail');
  };
  const handleItemSelect = item => {
    setSelectedRoute(item);
    toggleModal();
    toggleModal();
  };
  return (
    <ScrollView style={styles.container}>
      <MyHeader isTitle={true} isButton={true} title={'Explore More'} />
      <Textfield text={'Search Buses'} size={18} styles={styles.searchBus} />
      <View style={styles.routeSearch}>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
          <Textfield text={selectedRoute ? selectedRoute : 'Route Name'} />
          <Icon
            name={'caret-down'}
            size={20}
            type={'ionicon'}
            color={'black'}
          />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}>
          <View style={styles.modalContainer}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalItem}
                onPress={() => handleItemSelect(item)}>
                <Textfield text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
        <View style={styles.dropdownDate}>
          <TouchableOpacity
            onPress={() => setopendate1(true)}
            style={styles.datefield}>
            <Textfield
              text={isDateSelectedstart ? formatDate(date1) : ' Date'}
            />
            <Icon
              name={'calendar-alt'}
              size={18}
              type={'font-awesome5'}
              color={'black'}
            />
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
      </View>
      <Textfield
        text={'Popular Destination'}
        size={18}
        styles={styles.desHeader}
      />
      <View style={styles.destinationView}>
        <DestinationCard
          source={Images.jaddah}
          from={'Jeddah'}
          desTxt={'From Madina'}
          desTxt1={'From Makkah'}
          desTxt2={'From Riyadh'}
        />
        <DestinationCard
          source={Images.madina}
          from={'Madina'}
          desTxt={'From Makkah'}
          desTxt1={'From Jeddah'}
          desTxt2={'From Riyadh'}
        />
        <DestinationCard
          source={Images.makkah}
          from={'Makkah'}
          desTxt={'From Madina'}
          desTxt1={'From Jeddah'}
          desTxt2={'From Riyadh'}
        />
      </View>
      <Textfield
        text={'Favorite Journeys'}
        size={18}
        styles={styles.favTitle}
      />
      <View>
      <FlatListWithCard />
      </View>
      <View style={styles.TicketView}>
        <Textfield
          text={'Popular Tickets'}
          size={18}
          styles={styles.favTitle}
        />
      </View>
      <View style={styles.infocontainer}>
        <View style={styles.businfo}>
          <Text style={styles.bustitle}>Al Makkah</Text>
          <View style={styles.routecontainer}>
            <IconComponent
              name="route"
              size={14}
              color="grey"
              style={styles.iconstyle}
            />
            <Text style={styles.routename}> JED - MAK</Text>
          </View>
          <View style={styles.routedateconatiner}>
            <IconComponent
              name="clock"
              size={14}
              color="grey"
              style={styles.iconstyle}
            />
            <Text style={styles.routedate}> 25th July - 09:00 PM</Text>
          </View>
          <View style={styles.seatconatiner}>
            <IconComponent
              name="torah"
              size={12}
              color="grey"
              style={styles.iconstyle}
            />
            <Text style={styles.seatinfo}> 75 SAR</Text>
            <IconComponent
              name="chair"
              size={12}
              color="grey"
              style={styles.iconstyle}
            />
            <Text style={styles.seatquantity}> 32 seats</Text>
          </View>
        </View>
        <Image source={Images.bus} style={styles.busimage}></Image>
        <View style={styles.detailbtncontainer}>
          <TouchableOpacity style={styles.detailbtn} onPress={handleViewDetail}>
            <Text style={styles.detailbtntext}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  routeSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  searchBus: {
    fontWeight: '500',
    paddingTop:20,
  },
  routename: {
    color: 'black',
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '48%',
  },
  dropdownDate: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    width: '48%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalItem: {
    padding: 20,
    backgroundColor: Color.white,
    width: '50%',
    alignItems: 'center',
  },
  dateButton1: {
    padding: 10,
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: 'grey',
  },
  datefield: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  routedateconatiner: {
    paddingTop: 10,
    paddingLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infocontainer: {
    borderColor: Color.primary,
    backgroundColor: Color.secondary,
    borderWidth: 1,
    margin: 9,
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '39%',
    marginBottom:20,
    flex: 1, 
  },businfo: {},
  detailbtn: {
    height: '80%',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Color.primary,
    alignItems: 'center',
  },
  bustitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
  },
  routecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desHeader: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  routecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },routedate: {
    color: 'grey',
  },
  seatconatiner: {
    paddingLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatinfo: {
    color: 'grey',
    paddingRight: 20,
  },
  seatquantity: {
    color: 'grey',
  },
  imagecontainer: {
    height: '10%',
    width: '60%',
  },
  busimage: {
    width: '50%',
    height: '80%',
    resizeMode: 'contain',
    marginLeft: 142,
    marginTop:-100
  },detailbtn: {
    height: '80%',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Color.primary,
    alignItems: 'center',
  },
  detailbtncontainer: {
    width: '100%',
    height: '46%',
    paddingTop:10,
  },
  detailbtntext: {
    color: Color.primary,
    paddingTop: 10,
    fontWeight: '500',
    fontSize: 16,
  },
  favTitle: {
    fontWeight: 'bold',
    paddingLeft:10,
    paddingTop:10,
  },
  destinationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ScheduleScreen;
