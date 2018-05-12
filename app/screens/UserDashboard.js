import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Button } from 'react-native';

import Container from '../components/Container';
import ButtonLarge from '../components/ButtonLarge';
import BackgroundText from '../components/BackgroundText';

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
          <BackgroundText text=" No hay ningún anuncio en tu panel, puedes publicar uno pulsando en el botón." />
        </View>
        <ButtonLarge text="Publicar anuncio" handlePress={() => this.props.navigation.navigate('NewUserProject')} />
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
