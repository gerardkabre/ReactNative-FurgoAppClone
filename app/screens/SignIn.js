import React from 'react';
import { View, Button } from 'react-native';

class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  };
  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this.signInAsync} />
      </View>
    );
  }
}

export default SignIn;
