/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {IconSearch} from '../../assets';
import {colors, fonts} from '../../utils';

const Input = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.title}
        placeholder={placeholder}
        placeholderTextColor="#AFAFAF"
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
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    flex: 1,
  },
});
