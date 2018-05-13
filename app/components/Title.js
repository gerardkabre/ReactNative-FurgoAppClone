import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ text, black, small }) => {
  return <Text style={[styles.text, 
    black ? styles.black : styles.white,
    small ? styles.small : null]}>
    {text}
    </Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 25
  },
  white: {
    color: '#FFF'
  },
  black: {
    color: '#000'
  },
  small: {
    fontSize: 15
  }
});

export default Title;
