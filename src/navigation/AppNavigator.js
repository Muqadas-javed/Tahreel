/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreen from '../screens/MainScreen/Home';
import BookingScreen from '../screens/MainScreen/Booking';
import ScheduleScreen from '../screens/MainScreen/Schedule';
import NotificationScreen from '../screens/MainScreen/Notifications';
import ProfileScreen from '../screens/MainScreen/Profile';
import Availablebus from '../screens/MainScreen/Availablebus';
import Busdetail from '../screens/MainScreen/Busdetail';
import CardDetail from '../screens/MainScreen/CardDetail';
import Payment from '../screens/MainScreen/Payment';
import Color from '../theme/colors/Color';
import Thankyou from '../screens/MainScreen/Thankyou';
import Icon from '../theme/Icons';
import ModifyFlight from '../screens/MainScreen/ModifyFlight';
import { View } from 'react-native';
import Tracking from '../screens/MainScreen/Tracking';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
const DashboardStack = createNativeStackNavigator();
const BookingStack = createNativeStackNavigator();

const DashboardStackScreens = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name={'Main'}
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'Availablebus'}
      component={Availablebus}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'detail'}
      component={Busdetail}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'CardDetail'}
      component={CardDetail}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'Payment'}
      component={Payment}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'Thank'}
      component={Thankyou}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'ProfileScreen'}
      component={ProfileScreen}
      options={{headerShown: false}}
    />
  </DashboardStack.Navigator>
);
const BookingStackScreens= () => (
  <BookingStack.Navigator>
    <BookingStack.Screen
      name={'Booking'}
      component={BookingScreen}
      options={{headerShown: false}}
    />
    <BookingStack.Screen
      name={'ModifyFlight'}
      component={ModifyFlight}
      options={{headerShown: false}}
    />
    <BookingStack.Screen
      name={'Tracking'}
      component={Tracking}
      options={{headerShown: false}}
    />
    </BookingStack.Navigator>
    );

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (
    routeName === 'Onboarding' ||
    routeName === 'Welcome' ||
    routeName === 'LoginScreen' ||
    routeName === 'SigninScreen'||
    routeName === 'Availablebus' ||
    routeName === 'detail' ||
    routeName === 'CardDetail' ||
    routeName === 'Payment' ||
    routeName === 'Thank' ||
    routeName === 'ModifyFligh' ||
    routeName === 'Tracking' 

  ) {
    return 'none';
  }

  return 'flex';
}

const Tabs = createBottomTabNavigator();
export default () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>

    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          display: getTabBarVisibility(route),
          height: 55,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          
        },
        tabBarActiveTintColor: Color.primary,
        tabBarInactiveTintColor: '#08B783',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let IconComponent = FontAwesome5;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              type='feather'
              break;

            case 'Booking':
              iconName = 'route';
              type='font-awesome5'
              break;

            case 'Schedule':
              iconName = 'book-open';
              break;
            case 'Notification':
              iconName = 'bell';
              break;
            case 'Profile':
              iconName = 'user';
              break;
          }
          return (
            <Icon
              name={iconName}
              type={type}
              size={24}
              color={focused ? Color.primary : '#08B783'}
            />
          );
        },
      })}>
      <Tabs.Screen
        name={'Home'}
        options={{headerShown: false}}
        component={DashboardStackScreens}
      />
      <Tabs.Screen
        name={'Booking'}
        options={{headerShown: false}}
        component={BookingStackScreens}
      />
      <Tabs.Screen
        name={'Schedule'}
        options={{headerShown: false}}
        component={ScheduleScreen}
      />
      <Tabs.Screen
        name={'Notification'}
        options={{headerShown: false}}
        component={NotificationScreen}
      />
      <Tabs.Screen
        name={'Profile'}
        options={{headerShown: false}}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
    </View>
  );
};
