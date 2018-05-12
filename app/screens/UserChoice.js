import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableHighlight, Button } from 'react-native';

import Container from '../components/Container';
import ButtonLarge from '../components/ButtonLarge';
import BackgroundText from '../components/BackgroundText';

class UserChoice extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} />

        <View style={styles.contentBlock}>
          <BackgroundText text="Selecciona que tipo de usuario prefieres." />
          <BackgroundText small text="*Ambos llevan al usuario, no he creado la parte de transportista." />
        </View>
        <View style={styles.contentBlock}>
          <ButtonLarge text="Usuario Individual" handlePress={() => this.props.navigation.navigate('SignIn')} />
          <ButtonLarge text="Transportista" handlePress={() => this.props.navigation.navigate('SignIn')} />
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
