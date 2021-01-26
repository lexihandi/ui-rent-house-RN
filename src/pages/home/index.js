/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {Header, Input} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <Header />
      <Text style={styles.title}>Find Your Perfect Place!</Text>
      <Input placeholder="Find your dream home" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.background},
  title: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 30,
    padding: 20,
    maxWidth: 260,
  },
});
