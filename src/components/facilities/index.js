/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ImageSwimmingPool, ImageBedroom, ImageGarage} from '../../assets';
import {colors, fonts} from '../../utils';

const Facilities = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Image source={ImageSwimmingPool} style={styles.image} />
        <Text style={styles.title}>Swimming Pool</Text>
      </View>
      <View style={styles.content}>
        <Image source={ImageBedroom} style={styles.image} />
        <Text style={styles.title}>4 Bedroom</Text>
      </View>
      <View style={styles.content}>
        <Image source={ImageGarage} style={styles.image} />
        <Text style={styles.title}>Garage</Text>
      </View>
    </View>
  );
};

export default Facilities;

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row'},
  content: {
    borderRadius: 15,
    backgroundColor: colors.background,
    marginRight: 10,
    alignContent: 'center',
    elevation: 1,
  },
  image: {
    width: 120,
    height: 100,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.text.primary,
    textAlign: 'center',
    padding: 5,
  },
});
