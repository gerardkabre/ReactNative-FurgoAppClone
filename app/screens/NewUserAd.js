import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, StatusBar } from 'react-native';

import Container from '../components/Container';

class NewUserAd extends Component {
  static navigationOptions = {
    title: 'Nuevo Anuncio',
    
    headerTruncatedBackTitle: 'Cancelar'

  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
      </Container>
    );
  }
}

export default NewUserAd;
