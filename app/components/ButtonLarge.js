import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ButtonLarge = ({ text, handlePress }) => (
  <TouchableOpacity style={styles.loginScreenButton} onPress={() => handlePress()} underlayColor="#fff">
    <Text style={styles.loginText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  loginScreenButton: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#1E88E5',
    borderRadius: 5
  },
  loginText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default ButtonLarge;
