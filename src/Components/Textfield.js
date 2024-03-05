import React from 'react';
import {Text} from 'react-native';
import Color from '../theme/colors/Color';

const Textfield = ({text, textColor = Color.black, fontfamily, size, styles}) => {
  const textStyle = {
    fontFamily: fontfamily,
    fontSize: size,
    color: textColor,
    
  };
  return <Text style={[styles, textStyle]}>{text}</Text>;
};

export default Textfield;
