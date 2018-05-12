import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const BackgroundText = ({ text, small }) => {
  if (small) return <Text style={[styles.text, styles.small]}>{text}</Text>;
  return <Text style={[styles.text, styles.big]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    color: '#8b9cb7',
    textAlign: 'center'
  },
  big: {
    fontSize: 20
  },
  small: {
    fontSize: 10
  }
});

export default BackgroundText;
