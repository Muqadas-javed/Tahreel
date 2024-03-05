import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../assets/Images';
import {useNavigation} from '@react-navigation/native';
import Textfield from '../../Components/Textfield';
import HTInput from '../../Components/InputField/InputField';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const handleSignUp = () => {
    if (confirmPassword === password) {
      navigation.navigate('LoginScreen');
    } else {
      Alert('Passwords do not match');
    }
  };

  const handleSignUpNavigation = () => {
    navigation.navigate('LoginScreen');
  };

  const isSignupEnabled = confirmPassword === password;

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Image source={Images.logo} style={styles.logoimage} />
      <Text style={styles.afterlogotxt}>
        Sign up and get instant booking confirmations and updates right to your
        fingertips!
      </Text>
      <Textfield text={'User Name'} styles={styles.title} size={16} />
      <View style={styles.inputContainer}>
        <HTInput
          isIcon={true}
          placeholder="User Name"
          textColor="grey"
          name={'user-circle'}
          type={'font-awesome'}
          styles={styles.input}
        />
      </View>
      <Text style={styles.title}>Email</Text>
      <View style={styles.inputContainer}>
        <HTInput
          isIcon={true}
          placeholder="Enter Your Email"
          value={email}
          textColor="grey"
          handleTextChange={text => setEmail(text)}
          name={'envelope'}
          type={'font-awesome'}
          keyboardType={'email-address'}
          styles={styles.input}
        /></View>
      <Textfield text={'Password'} styles={styles.title} size={16} />
      <View style={styles.inputContainer}>
      <HTInput
          isPssIcon={true}
          placeholder="Enter Your Password"
          textColor="grey"
          handleTextChange={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          styles={styles.input}
        />
      </View>
      <Textfield text={'Confirm Password'} styles={styles.title} size={16} />
      <View style={styles.inputContainer}>
      <HTInput
          isPssIcon={true}
          placeholder="Enter Your Password"
          textColor="grey"
          handleTextChange={text => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
          styles={styles.input}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.SignupButton}
        onPress={handleSignUp}
        disabled={!isSignupEnabled}>
        <Text style={styles.SignupButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Already have an Account?</Text>
        <TouchableOpacity onPress={handleSignUpNavigation}>
          <Text style={styles.signUpLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal:10,
  },
  logoimage: {
    width: 150,
    height: 150,
    margin: 20,
    alignSelf: 'center',
  },
  afterlogotxt: {
    color: 'black',
    padding: 10,
    paddingLeft: 28,
    fontWeight: '500',
    paddingBottom: 30,
    lineHeight: 24,
  },
  title: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 30,
    fontWeight: '400',
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
    marginBottom: 15,
    paddingLeft: 20,
    borderRadius: 13,
    color: 'grey',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 47,
    color: 'grey',
  },
  SignupButton: {
    backgroundColor: '#008955',
    padding: 15,
    borderRadius: 10,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 10,
  },
  SignupButtonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    marginRight: 5,
    color: 'black',
    fontSize: 14,
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

export default Signin;
