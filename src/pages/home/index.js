/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {Banner, Header, Input} from '../../components';
import {ImageModernHouse, ImageWhiteHouse} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <Header />
      <Text style={styles.title}>Find Your Perfect Place!</Text>
      <Input placeholder="Find your dream home" />
      <View>
        <ScrollView
          horizontal
          style={styles.banner}
          showsHorizontalScrollIndicator={false}>
          <Banner image={ImageModernHouse} title="Modern House" loc="Bandung" />
          <Banner image={ImageWhiteHouse} title="White House" loc="Jakarta" />
        </ScrollView>
      </View>
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
  banner: {flexDirection: 'row'},
});
