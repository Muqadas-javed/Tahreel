import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '../../theme/Icons';
import Textfield from '../Textfield';
import {useNavigation} from '@react-navigation/native';

const MyHeader = ({isTitle, title}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => handleBackPress()}
        style={styles.backbutton}>
        <Icon name={'left'} size={20} type={'ant-design'} color={'grey'} />
        <Textfield text={'Back'} styles={styles.backtxt} size={18} />
      </TouchableOpacity>
      {isTitle ? (
        <View style={{width: '70%', alignItems: 'center'}}>
          <Textfield text={title} styles={styles.titletxt} size={20} />
        </View>
      ) : null}
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    alignContent:"center",

  },
  backbutton: {
    flexDirection: 'row',
  },
  backtxt: {
    fontSize: 24,
    marginLeft: 4,
    fontWeight: '400',
  },
  titletxt: {
    fontWeight:"500",
  },
});
