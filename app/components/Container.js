import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 25,
  }
});

export default Container;
