import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../store/actions/ActionTypes';
const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    AsyncStorage.removeItem('userInfo').then(() => {
      dispatch({type: LOGOUT, payload: null});
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>handleLogout()}>
        <Text style={styles.Txt}>Profile Screen</Text>
      </TouchableOpacity>
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

export default ProfileScreen;
