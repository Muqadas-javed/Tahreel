import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Images from '../../assets/Images';
import {useNavigation} from '@react-navigation/native';
const WelcomeScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const handleSignUpNavigation = () => {
    navigation.navigate('SigninScreen');
  };
  return (
    <View style={styles.container}>
      <Image source={Images.welcome} style={styles.image} />
      <Text style={styles.txttitle}>Welcome</Text>
      <Text style={styles.txtdes}>Have a better sharing experience</Text>
      <View style={styles.buttonconatiner}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleSignUpNavigation()}>
          <Text style={styles.loginButtonText}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton2}
          onPress={() => handleLogin()}>
          <Text style={styles.loginButtonText1}>Login</Text>
        </TouchableOpacity>
      </View>
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
  image: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 1.2,
    resizeMode: 'contain',
  },
  txttitle: {
    color: 'black',
    fontWeight: '400',
    fontSize: 32,
    padding: 5,
  },
  txtdes: {
    color: 'grey',
    fontSize: 18,
  },
  buttonconatiner: {
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#008955',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    height: Dimensions.get('window').height / 14,
    width: Dimensions.get('window').width / 1.2,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
  },
  loginButton2: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderColor: '#008955',
    borderWidth: 1.5,
    height: Dimensions.get('window').height / 14,
    width: Dimensions.get('window').width / 1.2,
  },
  loginButtonText1: {
    color: '#008955',
    fontSize: 20,
  },
});

export default WelcomeScreen;
