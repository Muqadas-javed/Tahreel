import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../assets/Images';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {LOGIN_SUCCESS} from '../../store/actions/ActionTypes';
import Color from '../../theme/colors/Color';
import HTInput from '../../Components/InputField/InputField';
const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both username and password.');
    } else {
      let info = {name: 'John', email: 'john@example.com'};
      AsyncStorage.setItem('userInfo', JSON.stringify(info)).then(() => {
        console.log('Heyy!');
        dispatch({type: LOGIN_SUCCESS, payload: info});
        // navigation.navigate('Main', {userName: 'John'});//
      });
    }
  };
  const handleSignUpNavigation = () => {
    navigation.navigate('SigninScreen');
  };
  return (
    <ScrollView style={{flexGrow: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.logoimage} />
        <Text style={styles.afterlogotxt}>
          It's fantastic to see you again! Sign in with your email or phone
          number
        </Text>
        <Text style={styles.title}>Email</Text>
        <HTInput
          isIcon={true}
          placeholder="Enter Your Email"
          value={email}
          textColor="grey"
          handleTextChange={text => setEmail(text)}
          name={'envelope'}
          type={'font-awesome'}
          keyboardType={'email-address'}
          styles={styles.InputField}
        />
        <Text style={styles.title}>Password</Text>
         <HTInput
          isPssIcon={true}
          placeholder="Enter Your Password"
          textColor="grey"
          handleTextChange={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          styles={styles.InputField}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.loginButton}
          onPress={() => handleLogin()}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUpNavigation}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoimage: {
    width: 150,
    height: 150,
    margin: 30,
    alignSelf: 'center',
  },
  afterlogotxt: {
    color: 'black',
    padding: 10,
    paddingLeft: 28,
    fontWeight: '500',
    paddingBottom: 30,
  },
  title: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 25,
    fontWeight: '500',
    paddingTop:24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 0.7,
    paddingLeft: 10,
    borderRadius: 13,
    color: 'grey',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 47,
    color: 'grey',
  },
  loginButton: {
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 10,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 40,
  },
  InputField:{
    marginHorizontal:20,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft:10,
    color:'black'
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    marginRight: 5,
    color: 'black',
    fontSize: 16,
  },
  signUpLink: {
    color: '#008955',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomimage: {
    width: '100%',
    height: 130,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: -10,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
