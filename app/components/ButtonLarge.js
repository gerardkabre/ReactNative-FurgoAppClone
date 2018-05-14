import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ButtonLarge = ({ text, handlePress, yellow, blue, black }) => (
  <TouchableOpacity
    style={[
      styles.ButtonContainer,
      blue
        ? styles.blue
        : yellow
          ? styles.yellow
          : black
            ? styles.black
            : styles.white
    ]}
    onPress={() => handlePress()}
    underlayColor="#fff"
  >
    <Text style={[styles.ButtonText, black || blue ? styles.whiteText : null]}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ButtonContainer: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5
  },
  ButtonText: {
    textAlign: 'center'
  },
  black: {
    backgroundColor: '#000'
  },
  blue: {
    backgroundColor: '#1E88E5'
  },
  yellow: {
    backgroundColor: '#FFC400'
  },
  white: {
    backgroundColor: '#FFF'
  },
  whiteText: {
    color: '#FFF'
  }
});

export default ButtonLarge;
