import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TopBar = ({ firstActon, title, secondAction }) => (
  <View style={styles.container}>
    <Text>{firstActon}</Text>
    <Text style={styles.title}>{title}</Text>
    <Text>{secondAction}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontWeight: '600'
  }
});

export default TopBar;
