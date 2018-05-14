import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Container from '../components/Container';
import ButtonLarge from '../components/ButtonLarge';
import Title from '../components/Title';

class AuthChoice extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: 'Cancelar'
  };

  render() {
    return (
      <Container yellow>
        <View style={styles.contentBlock}>
          <Title black text="Envía cosas al mejor precio." />
        </View>
        <View style={styles.contentBlock}>
          <Title black small text="Clon de Furgo" />
        </View>
        <View style={styles.contentBlock}>
          <ButtonLarge
            black
            text="Entrar con Email"
            handlePress={() => this.props.navigation.navigate('SignIn')}
          />
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  contentBlock: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default AuthChoice;
