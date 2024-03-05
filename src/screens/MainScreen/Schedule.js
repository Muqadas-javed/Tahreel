import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import DestinationCard from '../../Components/DestinationCard';
import Images from '../../assets/Images';
import Textfield from '../../Components/Textfield';
import DatePicker from 'react-native-date-picker';

import Color from '../../theme/colors/Color';
import Icon from '../../theme/Icons';
const ScheduleScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const items = ['Makkah', 'Madina', 'Jaddah', 'Riyad', 'Tabuk'];
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
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleItemSelect = item => {
    // Handle item selection here
    console.log('Selected Item:', item);
    toggleModal();
  };
  return (
    <View style={styles.container}>
      <Textfield text={'Explore More'} size={24} styles={styles.headerTxt} />
      <Textfield text={'Search Buses'} size={22} />
      <View style={styles.routeSearch}>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
          <Textfield text={'Route Name'} />
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <DestinationCard source={Images.jaddah} from={'destination'} />
        <DestinationCard source={Images.jaddah} from={'destination'} />
        <DestinationCard source={Images.jaddah} from={'destination'} />
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
  headerTxt: {
    color: 'black',
    fontWeight: '400',
    paddingVertical: 20,
    textAlign: 'center',
  },
  routeSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
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
    // alignItems:"center",
    justifyContent: 'space-between',
    // backgroundColor:'red',
    width: '90%',
  },
});

export default ScheduleScreen;
