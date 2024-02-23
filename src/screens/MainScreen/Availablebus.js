import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Color from '../../theme/colors/Color';
import Images from '../../assets/Images';

export default function Availablebus() {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleViewDetail=()=>{
    navigation.navigate('detail');
   };
  let IconComponent = FontAwesome5;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backbutton}>
        <IconComponent
          name="angle-left"
          size={20}
          color="black"
          style={styles.iconstyle}
        />
        <Text style={styles.backtitle}>Back</Text>
      </TouchableOpacity>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Available Bus for ride</Text>
        <Text style={styles.subtitle}>18 buses found</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 250,
  },
  backbutton: {
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  backtitle: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 5,
  },
  titlecontainer: {
    paddingTop: 25,
    margin: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    color: 'grey',
    fontSize: 18,
    paddingTop: 4,
  },
  infocontainer: {
    borderColor: Color.primary,
    backgroundColor: Color.secondary,
    borderWidth: 1,
    margin: 9,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: "26%",
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
  routename: {
    color: 'black',
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
    height: '70%',
    resizeMode: 'contain',
    marginLeft: 12,
  },
  businfo: {},
  detailbtn: {
    height: '80%',
    width: "100%",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Color.primary,
    alignItems: "center",
  },
  detailbtncontainer: {
    width: '100%',
    height: '36%',
  },
  detailbtntext: {
    color: Color.primary,
    paddingTop: 10,
    fontWeight: '500',
    fontSize: 16,
  }
});
