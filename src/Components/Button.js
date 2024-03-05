import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Color from '../theme/colors/Color';
const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    alignContent:'center',
    alignSelf:'center',
    marginVertical: 10,
    marginBottom:20,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default CustomButton;