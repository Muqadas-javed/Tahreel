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
const DashboardStack = createNativeStackNavigator();
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
  </DashboardStack.Navigator>
);

// const AccountStack = createNativeStackNavigator();
// const AccountStackScreens = () => (
//   <AccountStack.Navigator>
//     <AccountStack.Screen
//       name={'Home'}
//       component={HomeScreen}
//       options={{headerShown: false}}
//     />
//   </AccountStack.Navigator>
// );

// const ServicesStack = createNativeStackNavigator();
// const ServicesStackScreens = () => (
//   <ServicesStack.Navigator>
//     <ServicesStack.Screen
//       name={'Home'}
//       component={HomeScreen}
//       options={{headerShown: false}}
//     />
//   </ServicesStack.Navigator>
// );

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (
    routeName === 'Onboarding' ||
    routeName === 'Welcome' ||
    routeName === 'LoginScreen' ||
    routeName === 'SigninScreen'
  ) {
    return 'none';
  }

  return 'flex';
}

const Tabs = createBottomTabNavigator();
export default () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          display: getTabBarVisibility(route),
          height: 40,
        },
        tabBarActiveTintColor: '#08B783',
        tabBarInactiveTintColor: '#21775d',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let IconComponent = FontAwesome5;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;

            case 'Booking':
              iconName = 'route';
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
            <IconComponent
              name={iconName}
              size={22}
              color={focused ? '#08B783' : '#21775d'}
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
        component={BookingScreen}
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
  );
};
