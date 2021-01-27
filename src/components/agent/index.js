/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconCall, IconMessage, ImageProfile} from '../../assets';
import {colors, fonts} from '../../utils';

const Agent = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={ImageProfile} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.name}>De Kezia</Text>
        <Text style={styles.job}>House Owner</Text>
      </View>
      <IconMessage />
      <IconCall />
    </View>
  );
};

export default Agent;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {height: 60, width: 60, borderRadius: 60 / 2},
  name: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.text.primary,
  },
  job: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary,
  },
});
