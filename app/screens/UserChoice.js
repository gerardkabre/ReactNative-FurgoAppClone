import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableHighlight, Button } from 'react-native';

import Container from '../components/Container';

class UserChoice extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />

        <Text> Selecciona que tipo de usuario prefieres. </Text>
        <Text> *Ambos llevan al usuario, no he creado la parte de transportista. </Text>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('userDashboard')} />
      </Container>
    );
  }
}

export default UserChoice;
