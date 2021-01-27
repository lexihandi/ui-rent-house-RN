/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Agent, Button, Facilities} from '../../components';
import {IconBack, IconRatings, ImageModernHouseDetail} from '../../assets';
import {colors, fonts} from '../../utils';

const Detail = () => {
  return (
    <View style={styles.page}>
      <Image source={ImageModernHouseDetail} style={styles.image} />
      <TouchableOpacity>
        <IconBack style={styles.icon} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <View style={styles.wrapTitle}>
            <View>
              <Text style={styles.title}>Modern House</Text>
              <Text style={styles.loc}>KBP Bandung, Indonesia</Text>
            </View>
            <IconRatings />
          </View>
          <Text style={styles.text}>Listing Agent</Text>
          <Agent />
          <Text style={styles.text}>House Facilities</Text>
          <Facilities />
          <Text style={styles.text}>Description</Text>
          <Text style={styles.desc}>
            Luxury homes at affordable prices with Bandung's hilly atmosphere.
            Located in a strategic location, flood free.
          </Text>
          <View style={styles.booking}>
            <View>
              <Text style={styles.priceTitle}>Price</Text>
              <Text style={styles.price}>$7,500</Text>
            </View>
            <Button />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  page: {backgroundColor: 'black', flex: 1},
  icon: {position: 'absolute', top: 0, left: 0},
  image: {width: 420, height: 300},
  wrapper: {padding: 20},
  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
  loc: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.secondary,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.primary,
    marginTop: 20,
    marginBottom: 10,
  },
  descTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 40,
  },
  booking: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.secondary,
  },
  price: {
    fontFamily: fonts.primary[700],
    fontSize: 22,
    color: colors.tertinary,
  },
});
