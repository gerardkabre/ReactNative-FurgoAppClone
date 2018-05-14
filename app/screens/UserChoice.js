import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Container from '../components/Container';
import ButtonLarge from '../components/ButtonLarge';
import Title from '../components/Title';

class UserChoice extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container video>
        <View style={styles.contentBlock}>
          <Title text="Hola, soy Gerard." />
        </View>
        <View style={styles.contentBlock}>
          <Title small text="Ambos llevan a usuario y no a transportista." />
        </View>
        <View style={styles.contentBlock}>
          <ButtonLarge
            yellow
            text="Busco un transportista"
            handlePress={() => this.props.navigation.navigate('AuthChoice')}
          />
          <ButtonLarge
            text="Soy un transportista"
            handlePress={() => this.props.navigation.navigate('AuthChoice')}
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

export default UserChoice;
