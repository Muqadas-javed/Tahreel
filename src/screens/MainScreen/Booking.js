import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const BookingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Txt}>Booking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Txt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BookingScreen;
