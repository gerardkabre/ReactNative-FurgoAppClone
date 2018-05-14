import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';

const FormClickable = ({ label, handlePress }) => (
  <TouchableHighlight
    style={styles.TextInput}
    onPress={() => handlePress()}
    underlayColor="#fff"
  >
    <Text>{label}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cecece'
  }
});

export default FormClickable;
