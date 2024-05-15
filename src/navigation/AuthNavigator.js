import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Auth/Onboarding';
import Welcome from '../screens/Auth/Welcome';
import LoginScreen from '../screens/Auth/Login';
import SigninScreen from '../screens/Auth/SignIn';
import ProfileScreen from '../screens/MainScreen/Profile';
const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'Onboarding'}
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'Welcome'}
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'SigninScreen'}
        component={SigninScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
