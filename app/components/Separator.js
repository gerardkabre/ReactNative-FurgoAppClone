import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = ({ text, black, small }) => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 20,
    marginTop: 20,
    marginBottom: 10
  }
});

export default Separator;
