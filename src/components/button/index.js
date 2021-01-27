/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../utils';

const Button = () => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.text}>Book Now</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.tertinary,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 40,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.white,
  },
});
