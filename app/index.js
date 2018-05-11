import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NativeRouter, Route, Link, Switch, Redirect } from 'react-router-native';

import UserDashboard from './screens/UserDashboard';
import UserChoice from './screens/UserChoice';
import NewAd from './screens/NewAd';

const Index = () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={UserChoice} />
      <Route path="/UserDashboard" component={UserDashboard} />
      <Route path="/NewAd" component={NewAd} />
    </Switch>
  </NativeRouter>
);

export default Index;
