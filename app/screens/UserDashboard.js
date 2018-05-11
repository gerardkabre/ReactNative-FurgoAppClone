import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Button } from 'react-native';

import Container from '../components/Container';

class UserDashboard extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />

        <Text> No hay ningún anuncio en tu panel, puedes publicar uno pulsando en el botón. </Text>
        <Button title="Publicar anuncio" onPress={() => this.props.navigation.navigate('newUserAd')} />
        <Button title="Volver" onPress={() => this.props.navigation.goBack()} />
      </Container>
    );
  }
}

export default UserDashboard;
