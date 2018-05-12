import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ButtonLarge = ({ text, handlePress }) => (
  <TouchableOpacity style={styles.ButtonContainer} onPress={() => handlePress()} underlayColor="#fff">
    <Text style={styles.ButtonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ButtonContainer: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#1E88E5',
    borderRadius: 5
  },
  ButtonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default ButtonLarge;
