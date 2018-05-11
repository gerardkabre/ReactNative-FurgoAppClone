import React from 'react';
import { View, StyleSheet } from 'react-native';

const Content = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center',
    backgroundColor: '#edece8',
    paddingVertical: 25,
    paddingHorizontal: 10
  }
});

export default Content;
