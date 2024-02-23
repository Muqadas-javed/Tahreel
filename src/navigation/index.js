import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_SUCCESS} from '../store/actions/ActionTypes';
import {useDispatch,useSelector} from 'react-redux';
const Container = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    AsyncStorage.getItem('userInfo').then(userInfo => {
      if (userInfo != null) {
        dispatch({type: LOGIN_SUCCESS, payload: JSON.parse(userInfo)});
      }
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    });
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      {user === null ? <AuthNavigator /> : <Navigator />}
    </NavigationContainer>
  );
};

export default Container;
