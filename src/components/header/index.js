/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconNavbar} from '../../assets';

const Header = () => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <IconNavbar />
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {padding: 20},
});
