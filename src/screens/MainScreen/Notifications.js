import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Txt}>Notification Screen</Text>
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

export default NotificationScreen;
