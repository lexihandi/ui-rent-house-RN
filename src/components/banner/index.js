/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconRatings} from '../../assets';
import {fonts} from '../../utils';

const Banner = ({image, title, loc, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image source={image} style={styles.img} />
      <View style={styles.text}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.loc}>{loc}</Text>
        </View>
        <IconRatings />
      </View>
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    marginTop: 30,
    marginRight: 15,
  },
  img: {
    width: 280,
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {fontFamily: fonts.primary[600], fontSize: 14},
  loc: {fontFamily: fonts.primary[400], fontSize: 10},
});
