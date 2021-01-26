/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconNavbar} from '../../assets';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <IconNavbar />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {padding: 20},
});
