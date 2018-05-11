import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import TopBar from '../components/TopBar';
import Container from '../components/Container';
import Content from '../components/Content';
import ButtonLink from '../components/ButtonLink';

class UserChoice extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
        <Content>
          <Text> Selecciona que tipo de usuario prefieres. </Text>
          <Text> *Ambos llevan al usuario, no he creado la parte de transportista. </Text>
          <ButtonLink url={'UserDashboard'} text={'Usuario Buscando transportista'} />
          <ButtonLink url={'UserDashboard'} text={'Transportista buscando trabajo'} />
        </Content>
      </Container>
    );
  }
}

export default UserChoice;
