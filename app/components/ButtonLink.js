import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { Link } from 'react-router-native';

const ButtonLink = ({ url, text }) => (
  <Link to={`/${url}`} component={TouchableHighlight} style={styles.button}>
    <Text style={styles.buttonText}>{text}</Text>
  </Link>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginTop: 10,
    borderRadius: 5,
    
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});

export default ButtonLink;
