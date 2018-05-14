import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = ({ label, value, onChange, placeholder }) => (
  <View style={styles.TextInput}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder ? placeholder : label}
      value={value}
      onChangeText={value => onChange(`${label}`, value)}
    />;
  </View>
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
  },
  input: {
    flex: 1
  },
  label: {
    flex: 1
  }
});

export default FormInput;
