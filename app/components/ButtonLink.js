import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { Link } from 'react-router-native';

const ButtonLink = ({ url, text }) => (
  <Link to={`/${url}`} component={TouchableHighlight} style={styles.button}>
    <Text>{text}</Text>
  </Link>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 5
  }
});

export default ButtonLink;
