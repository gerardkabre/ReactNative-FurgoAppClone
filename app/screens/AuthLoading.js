import React from 'react';
import Auth from 'aws-amplify';

import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.checkLogin();
  }

  checkLogin = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.props.navigation.navigate('App');  
    } catch (err){
      this.props.navigation.navigate('Auth');  
    }
    
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoading;
