import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Color from '../theme/colors/Color';
import styles from './styles';
const CustomButton = ({
  onClick,
  textSize,
  buttonType = 'border',
  borderColor = Color.primary,
  backgroundColor,
  textColor = Colorswhite,
  family,
  style,
  width=width,
  height=height,
}) => {
  const textStyle = {
    fontFamily: family,
    color: textColor,
    fontSize: textSize,
  };
  const containerStyle = {
    backgroundColor,
    height: Dimensions.get('window').height * 0.05,
    width : Dimensions.get('window').width * 0.8,
    ...(buttonType === 'border' && {borderColor, borderWidth: 1}),
    ...(buttonType === 'fill' && {backgroundColor}),
  };
  return (
    <TouchableOpacity
      style={[style, styles.container, containerStyle]}
      onPress={() => onClick()}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
