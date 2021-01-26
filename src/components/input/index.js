/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconSearch} from '../../assets';
import {colors, fonts} from '../../utils';

const Input = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.title}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={'#AFAFAF'}
      />
      <TouchableOpacity>
        <IconSearch />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    alignItems: 'center',
    shadowColor: '#f8f8ff',
    marginLeft: 20,
    paddingEnd: 8,
  },
  title: {fontSize: 14, marginLeft: 20, fontFamily: fonts.primary[400]},
});
