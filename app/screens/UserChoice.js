import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableHighlight, Button } from 'react-native';

import Container from '../components/Container';
import ButtonLarge from '../components/ButtonLarge';

class UserChoice extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />

        <View style={styles.contentBlock}>
          <Text> Selecciona que tipo de usuario prefieres. </Text>
          <Text> *Ambos llevan al usuario, no he creado la parte de transportista. </Text>
        </View>
        <View style={styles.contentBlock}>
          <ButtonLarge text="Usuario Individual" handlePress={() => this.props.navigation.navigate('userDashboard')} />
          <ButtonLarge text="Transportista" handlePress={() => this.props.navigation.navigate('userDashboard')} />
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
