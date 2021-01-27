/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {Banner, Header, Input, Content} from '../../components';
import {
  ImageModernHouse,
  ImageTriangleHouse,
  ImageWhiteHouse,
  ImageWoodenHouse,
  ImageHillHouse,
} from '../../assets';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header />
      <Text style={styles.title}>Find Your Perfect Place!</Text>
      <Input placeholder="Find your dream home" />
      <View>
        <ScrollView
          horizontal
          style={styles.banner}
          showsHorizontalScrollIndicator={false}>
          <Banner
            image={ImageModernHouse}
            title="Modern House"
            loc="Bandung"
            onPress={() => navigation.navigate('Detail')}
          />
          <Banner image={ImageWhiteHouse} title="White House" loc="Jakarta" />
        </ScrollView>
      </View>
      <Text style={styles.text}>Recommended For You</Text>
      <Content image={ImageWoodenHouse} title="Wooden House" loc="Bandung" />
      <Content image={ImageTriangleHouse} title="Triangle House" loc="Bogor" />
      <Content image={ImageHillHouse} title="Hill House" loc="Makassar" />
    </ScrollView>
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
  text: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 18,
    padding: 20,
  },
});
