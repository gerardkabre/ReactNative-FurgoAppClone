import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import TopBar from '../components/TopBar';
import Container from '../components/Container';
import Content from '../components/Content';


class UserChoice extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
        <Content>
          <Text> Selecciona que tipo de usuario prefieres. </Text>

          <Link to='/UserDashboard' component={TouchableHighlight}>
            <Text>User</Text>
          </Link>
        </Content>
      </Container>
    );
  }
}

export default UserChoice;
