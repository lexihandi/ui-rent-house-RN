/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconForward, IconRatings} from '../../assets';
import {colors, fonts} from '../../utils';

const Content = ({image, title, loc}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.loc}>{loc}</Text>
          <IconRatings />
        </View>
      </View>
      <IconForward />
    </TouchableOpacity>
  );
};

export default Content;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    elevation: 2,
    backgroundColor: colors.background,
    paddingHorizontal: 40,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 10,
  },
  content: {flexDirection: 'row', alignItems: 'center'},
  image: {width: 80, height: 80},
  text: {marginLeft: 10},
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  loc: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 8,
  },
});
