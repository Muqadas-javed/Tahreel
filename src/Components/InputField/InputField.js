import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from '../styles';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from '../../theme/Icons';
const HTInput = ({
  text,
  placeholder,
  styles,
  handleTextChange,
  textColor,
  isPssIcon,
  isIcon,
  name,
  type,
  value,
  keyboardType
}) => {
  //States defined
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={[styles, style.container]}>
      <TextInput
        style={[style.input]}
        onChangeText={handleTextChange}
        secureTextEntry={passwordVisible}
        placeholderTextColor={textColor}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {isPssIcon ? (
        <TouchableOpacity
          style={style.icon}
          onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="grey"
            type={'font-awesome'}
          />
        </TouchableOpacity>
      ) : null}

      {isIcon ? <Icon name={name} type={type} style={style.icon} /> : null}
    </View>
  );
};

export default HTInput;
