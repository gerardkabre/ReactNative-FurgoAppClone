import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch, Redirect } from 'react-router-native';

import UserDashboard from './screens/UserDashboard';

const Index = () => (
  <View style={styles.container}>
    <NativeRouter>
      <Switch>
        <Route path="/" component={UserDashboard} />
      </Switch>
    </NativeRouter>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Index;
