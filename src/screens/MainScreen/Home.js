import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from 'react-native';
import Images from '../../assets/Images';
import DatePicker from 'react-native-date-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import SwitchSelector from 'react-native-switch-selector';
import {useFocusEffect} from '@react-navigation/native';
import Color from '../../theme/colors/Color';
const HomeScreen = ({navigation}) => {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [opendate1, setopendate1] = useState(false);
  const [opendate2, setopnedate2] = useState(false);
  const [openfrom, setOpenfrom] = useState(false);
  const [isDateSelectedstart, setIsDateSelectedstart] = useState(false);
  const [isDateSelectedend, setIsDateSelectedend] = useState(false);
  const [items, setItems] = useState([
    {label: 'Makkah', value: 'MAK'},
    {label: 'Madina', value: 'MAD'},
    {label: 'Jaddah', value: 'JAD'},
    {label: 'Riyad', value: 'RYD'},
    {label: 'Tabuk', value: 'TBK'},
  ]);
  const [selectedItemTextFrom, setSelectedItemTextFrom] = useState('');
  const [selectedItemValueFrom, setSelectedItemValueFrom] = useState('');
  const [selectedItemTextTo, setSelectedItemTextTo] = useState('');
  const [selectedItemValueTo, setSelectedItemValueTo] = useState('');
  const [button1Color, setButton1Color] = useState('white');
  const [button2Color, setButton2Color] = useState('transparent');
  const [button2TextColor, setButton2TextColor] = useState('black');
  const [showEvents, setShowEvents] = useState(true);
  const [ssss, setSSSS] = useState('R');
  const [counter, setCounter] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isadultModalVisible, setadultModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleadultModal = () => {
    setadultModalVisible(!isadultModalVisible);
  };
  const renderItemList = () => {
    return items.map(item => (
      <TouchableOpacity
        key={item.value}
        onPress={() => handleItemSelected(item)}>
        <Text style={styles.modallist}>{item.label}</Text>
      </TouchableOpacity>
    ));
  };
  const increaseCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };
  const decreaseCounter = () => {
    setCounter(prevCounter => (prevCounter - 1 >= 0 ? prevCounter - 1 : 0));
  };
  const handleLogin = () => {
    return console.log(hello);
  };
  useFocusEffect(
    React.useCallback(() => {
      handleButton1Click();
      setSSSS({ gender: 'O' })
      setShowEvents();
    }, []),
  );

  const handleButton1Click = () => {
    setButton1Color('#37E5FF');
    setButton2Color('#F6F6F6');
    setButton2TextColor('black');
    setShowEvents(true);
  };
   const handlesearch=()=>{
    navigation.navigate('Availablebus');
   };
  const handleButton2Click = () => {
    setButton1Color('#F6F6F6');
    setButton2Color('#37E5FF');
    setButton2TextColor('black');
    setShowEvents(false);
  };
  const handleItemSelected = selectedItem => {
    setModalVisible(false);

    // Check which dropdown is selected
    if (openfrom) {
      setSelectedItemTextFrom(selectedItem.label);
      setSelectedItemValueFrom(selectedItem.value);
    } else {
      setSelectedItemTextTo(selectedItem.label);
      setSelectedItemValueTo(selectedItem.value);
    }
  };

  let IconComponent = FontAwesome5;
  const formatDate = date => {
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.home} style={styles.backgroundImage}>
        <View style={styles.backgroundcontainer}>
          <View style={styles.switchbutton}>
            <SwitchSelector
              initial={0}
              onPress={value => setSSSS({gender: value})}
              textColor={Color.black}
              selectedColor={Color.white}
              buttonColor={Color.primary}
              fontSize={18}
              hasPadding={true}
              options={[
                {label: 'One Way', value: 'O'},
                {label: 'Round Trip', value: 'R'},
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector">
            </SwitchSelector>
          </View>

          <View style={styles.flightinfo}>
            <View style={styles.dropdownmain}>
              <View style={styles.iconview}>
                <IconComponent
                  name="map-marker-alt"
                  size={18}
                  color="black"
                  style={styles.iconstyle}
                />
                <Text style={styles.fromtext}>
                  {' '}
                  {selectedItemTextFrom || 'From'}{' '}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.dropdownview}
                onPress={() => {
                  toggleModal();
                  setOpenfrom(true);
                }}>
                <Text style={styles.dropdowntxt}>
                  {' '}
                  {selectedItemValueFrom || 'from'}
                </Text>
                <IconComponent
                  name="angle-down"
                  size={18}
                  color="black"
                  style={styles.iconstyle}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.lineview}></View>
            <View style={styles.dropdownmain}>
              <View style={styles.iconview}>
                <IconComponent
                  name="map-marker-alt"
                  size={18}
                  color="black"
                  style={styles.iconstyle}
                />
                <Text style={styles.fromtext}>
                  {' '}
                  {selectedItemTextTo || 'To'}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.dropdownview2}
                onPress={() => {
                  toggleModal();
                  setOpenfrom(false);
                }}>
                <Text style={styles.dropdowntxt}>
                  {selectedItemValueTo || 'to'}
                </Text>
                <IconComponent
                  name="angle-down"
                  size={18}
                  color="black"
                  style={styles.iconstyle}
                />
              </TouchableOpacity>
            </View>
            </View>
            {ssss?.gender === 'O' && ( // Check if "One Way" is selected
              <View style={styles.datecontainer}>
                <TouchableOpacity
                  style={styles.dateButton1}
                  onPress={() => setopendate1(true)}>
                  <View style={styles.datefield}>
                    <IconComponent
                      name="calendar-alt"
                      size={20}
                      color="black"
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
            )}
            {ssss?.gender === 'R' && ( // Check if "Round Trip" is selected
                <View style={styles.datecontainer}>
                  <TouchableOpacity
                    style={styles.dateButton}
                    onPress={() => setopendate1(true)}>
                    <View style={styles.datefield}>
                      <IconComponent
                        name="calendar-alt"
                        size={20}
                        color="black"
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
                  <TouchableOpacity
                    style={styles.dateButton2}
                    onPress={() => setopnedate2(true)}>
                    <View style={styles.datefield}>
                      <IconComponent
                        name="calendar-alt"
                        size={20}
                        color="black"
                      />
                      <Text style={styles.dateButtonText}>
                        {isDateSelectedend ? formatDate(date2) : 'End Date'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <DatePicker
                    modal
                    mode="date"
                    open={opendate2}
                    date={date2}
                    onConfirm={date => {
                      setopnedate2(false);
                      setDate2(date);
                      setIsDateSelectedend(true);
                    }}
                    onCancel={() => {
                      setopnedate2(false);
                    }}
                  />
                </View>
            )}
          
          <Modal isVisible={isModalVisible} style={{alignItems: 'center'}}>
            <View style={styles.modelstyle}>{renderItemList()}</View>
          </Modal>
          <View style={styles.inputadult}>
            <IconComponent
              name="user"
              size={18}
              color="black"
              style={styles.adulticon}
            />
            <TextInput
              style={styles.textField}
              placeholder={`${counter} Adult`}
              placeholderTextColor="black"
              onFocus={toggleadultModal}
              onChangeText={text => setInputValue(text)}
            />
          </View>
          <Modal
            isVisible={isadultModalVisible}
            onBackdropPress={toggleadultModal}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleadultModal}>
                <Text style={styles.closeButtonText}>&times;</Text>
              </TouchableOpacity>
              <Text style={styles.modalText}>Adult</Text>
              <View style={styles.counterContainer}>
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={decreaseCounter}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.counter}>
                  <Text style={styles.counterText}>{counter}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={increaseCounter}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.okbutton} onPress={toggleadultModal}>
                <Text style={styles.okButtonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <View style={styles.searchcontainer}>
          <TouchableOpacity style={styles.searchbutton} onPress={handlesearch}>
          <Text style={styles.searchtext}>Search</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchbutton: {
    width: '97%',
    padding: 10,
    borderRadius: 10,
  },
  backgroundcontainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '90%',
    height: '42%',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginLeft: 14,
  },
  flightinfo: {
    backgroundColor: Color.secondary,
    borderRadius: 10,
    width: '90%',
    height: 90,
    paddingHorizontal: 10,
  },
  dropdownmain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  modallist: {
    color: 'black',
    padding: 8,
    fontSize: 20,
  },
  dropdownview2: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  dropdowntxt: {
    color: 'black',
  },
  modelstyle: {
    flex: 0.28,
    backgroundColor: 'white',
    width: '70%',
    paddingLeft: 10,
    borderRadius: 10,
  },
  inputadult: {
    backgroundColor: Color.secondary,
    width: '90%',
    height: '18%',
    paddingLeft: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  textField: {
    height: '100%',
    fontSize: 20,
    paddingLeft: 15,
    fontWeight:'400',
  },
  counterContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '70%',
    marginLeft: 40,
  },
  counterButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    size: 12,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    width: '70%',
    height: '18%',
    borderRadius: 10,
    marginLeft: 50,
  },
  okbutton: {
    position: 'absolute',
    bottom: 5,
    right: 2,
    width: '19%',
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: '13%',
    borderRadius: 10,
    backgroundColor: Color.primary,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Color.white,
    textAlign: 'center',
  },
  okButtonText: {
    color: Color.black,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Color.black,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'left',
    color: Color.black,
    paddingLeft: 0,
  },
  counter: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: Color.black,
  },
  counterText: {
    fontSize: 18,
    color: Color.black,
  },
  fromtext: {
    color: 'black',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '400',
  },
  lineview: {
    backgroundColor: 'grey',
    width: '80%',
    height: 1,
    marginTop: 10,
    marginLeft: 10,
    alignSelf: 'center',
  },
  dropdownview: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  datecontainer: {
    flexDirection: 'row',
    width:'90%',
    height:'17%',
    marginTop:10,
    marginBottom:10,
    borderRadius:20,
  },
  iconstyle: {
    paddingLeft: 10,
  },
  adulticon: {
  },
  datefield: {flexDirection: 'row', alignItems: 'center'},
  dateButton: {
    backgroundColor: Color.secondary,
    width: '47%',
    padding: 10,
    borderRadius: 10,
  },
  dateButton2: {
    backgroundColor: Color.secondary,
    width: '47%',
    padding: 10,
    borderRadius: 10,
    marginLeft:15,
  },
  dateButton1: {
    backgroundColor: Color.secondary,
    padding: 10,
    width: '100%',
    borderRadius: 10,
  },
  iconview: {
    flexDirection: 'row',
  },
  dateButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight:'500',
    paddingLeft: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchcontainer:{
    alignSelf:'center',
    width:'80%',
    height:'8%',
    margin:10,
  },
  searchbutton:{
    backgroundColor:Color.primary,
    alignContent:'center',
    alignItems:'center',
    marginTop:10,
    padding:12,
    height:'100%',
    borderRadius:10,
  },
  searchtext:{
    fontSize:20,
    fontWeight:'700',
    color:Color.white,
    }
});

export default HomeScreen;
