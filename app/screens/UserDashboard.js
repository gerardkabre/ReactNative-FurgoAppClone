import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Button } from 'react-native';

import Container from '../components/Container';
import ButtonLarge from '../components/ButtonLarge';

class UserDashboard extends Component {
  static navigationOptions = {
    title: 'Mis anuncios',
    headerBackTitle: 'Cancelar'
  };
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
        <View style={styles.contentBlock}>
          <Text> No hay ningún anuncio en tu panel, puedes publicar uno pulsando en el botón. </Text>
        </View>
        <ButtonLarge text="Publicar anuncio" handlePress={() => this.props.navigation.navigate('newUserAd')} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentBlock: {
    flex: 8,
    justifyContent: 'center'
  }
});

export default UserDashboard;
