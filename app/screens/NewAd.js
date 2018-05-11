import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import TopBar from '../components/TopBar';
import Container from '../components/Container';
import Content from '../components/Content';
import ButtonLink from '../components/ButtonLink';

class UserDashboard extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
        <TopBar title={'Nuevo anuncio'} firstActon={'cancelar'} secondAction={'Publicar'} />
        <Content>
         
          <ButtonLink url={''} text={'user choice again'}/>
        </Content>
      </Container>
    );
  }
}

export default UserDashboard;