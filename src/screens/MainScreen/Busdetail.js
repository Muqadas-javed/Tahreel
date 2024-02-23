import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Color from '../../theme/colors/Color';
import Images from '../../assets/Images';
import Textfield from '../../Components/Textfield';

const data = Array.from({length: 24}, (_, index) => index + 1);
const App = () => {
  let IconComponent = FontAwesome;
  let IconComponent1 = FontAwesome5;
  let IconComponent2 = MaterialIcons;
  const [pressed, setPressed] = useState(false);
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  
  const renderTouchableItem = item => (
    <TouchableOpacity
      style={[styles.card, pressed ? styles.darkGreenCard : styles.greenCard]}
      activeOpacity={0.1}
      onPress={() => setPressed(!pressed)}>
      <Text style={styles.cardText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderNonTouchableItem = item => (
    <View style={[styles.card, styles.greyCard]}>
      <Text style={styles.cardText}>{item}</Text>
    </View>
  );

  const renderItem = ({item}) => {
    return item <= 12
      ? renderNonTouchableItem(item)
      : renderTouchableItem(item);
  };

  const renderRow = ({item}) => (
    <View style={styles.row}>
      {item.map(number => (
        <View key={number} style={styles.cardContainer}>
          {renderItem({item: number})}
        </View>
      ))}
    </View>
  );

  const groupedData = [];
  for (let i = 0; i < data.length; i += 4) {
    groupedData.push(data.slice(i, i + 4));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <IconComponent
            name="angle-left"
            size={20}
            color="black"
            style={styles.iconStyle}
          />
          <Text style={styles.backTitle}>Back</Text>
        </TouchableOpacity> */}
        <Text style={styles.headerTitle}>Bus Details</Text>
      </View>
      <View >
        <ScrollView style={styles.scrollView}>
          <View style={styles.titlecontainer}>
            <Text style={styles.bustitle}>Al Makkah </Text>
            <Text style={styles.subtitle}>(JED-MAK)</Text>
          </View>
          <Image source={Images.bus1} style={styles.busimage}></Image>
          <View style={styles.routedateconatiner}>
            <IconComponent
              name="star"
              size={14}
              color="#FBC02D"
              style={styles.iconstyle}
            />
            <Text style={styles.routedate}> 4.9 (531 reviews)</Text>
          </View>
          <Textfield
            text={'Specifications'}
            size={22}
            styles={styles.specificationtxt}
          />
          <View style={styles.specificationcards}>
            <View style={styles.colorcard}>
              <IconComponent1
                name="palette"
                size={20}
                color="black"
                style={styles.iconStyle}
              />
              <Text style={styles.cradtxt}>Color</Text>
              <Text style={styles.cradtxt1}>White</Text>
            </View>
            <View style={styles.colorcard}>
              <IconComponent1
                name="bus-alt"
                size={20}
                color="black"
                style={styles.iconStyle}
              />
              <Text style={styles.cradtxt}>No.</Text>
              <Text style={styles.cradtxt1}>1111</Text>
            </View>
            <View style={styles.colorcard}>
              <IconComponent1
                name="chair"
                size={20}
                color="black"
                style={styles.iconStyle}
              />
              <Text style={styles.cradtxt}>Seats</Text>
              <Text style={styles.cradtxt1}>48</Text>
            </View>
            <View style={styles.colorcard}>
              <IconComponent2
                name="restaurant"
                size={20}
                color="black"
                style={styles.iconStyle}
              />
              <Text style={styles.cradtxt}>Refresh</Text>
              <Text style={styles.cradtxt1}>N/A</Text>
            </View>
          </View>
          <View style={styles.datecontainer}>
            <View style={styles.datestyle}>
              <IconComponent1
                name="calendar-alt"
                size={14}
                color="#008955"
                style={styles.iconstyle}
              />
              <Text style={styles.datetxt}> 25th July 2024</Text>
            </View>
            <View style={styles.timestyle}>
              <IconComponent1
                name="clock"
                size={14}
                color="#008955"
                style={styles.iconstyle}
              />
              <Text style={styles.datetxt}> 10:00 AM</Text>
            </View>
          </View>
          <Text style={styles.seattitle}>Choose your Seat</Text>
          <Image source={Images.wheel} style={styles.wheelimage}></Image>
          <View style={{marginBottom:190}}>
          <FlatList
            data={groupedData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderRow}
          />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backTitle: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: Color.black,
  },
  titlecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  bustitle: {
    color: Color.black,
    fontSize: 24,
    fontWeight: '500',
  },
  subtitle: {
    color: 'grey',
    fontSize: 20,
  },
  busimage: {
    width: '70%',
    height: '15%',
    resizeMode: 'center',
    alignSelf: 'center',
  },
  routedateconatiner: {
    paddingTop: 10,
    paddingLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  routedate: {
    color: 'grey',
  },
  text: {
    fontSize: 42,
  },
  specificationtxt: {
    color: Color.black,
    fontSize: 26,
    padding: 4,
  },
  specificationcards: {
    flexDirection: 'row',
  },
  colorcard: {
    width: '23%',
    height: '100%',
    backgroundColor: Color.secondary,
    alignContent: 'center',
    alignItems: 'center',
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginLeft: 6,
  },
  cradtxt: {
    color: Color.black,
    fontSize: 16,
  },
  cradtxt1: {
    color: Color.black,
    fontSize: 12,
  },
  datecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  datestyle: {
    flexDirection: 'row',
    padding: 8,
  },
  datetxt: {
    color: '#008955',
  },
  timestyle: {
    flexDirection: 'row',
    padding: 10,
  },
  seattitle: {
    color: 'grey',
    fontSize: 24,
    fontWeight: '400',
  },
  wheelimage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  seatlabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemtitle: {
    color: Color.white,
    backgroundColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greyCard: {
    backgroundColor: 'grey',
  },
  greenCard: {
    backgroundColor: Color.primary,
  },
  darkGreenCard: {
    backgroundColor: 'darkgreen',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
