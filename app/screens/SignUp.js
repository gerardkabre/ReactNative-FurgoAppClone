import React from 'react';
import { View, Button, AsyncStorage, TextInput, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import ButtonLarge from '../components/ButtonLarge';
import Container from '../components/Container';

class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Crea tu cuenta'
  };

  state = {
    userName: '',
    password: ''
  };

  onChangeText = (key, value) => this.setState({ [key]: value });

  signUp = () => {
    Auth.signUp({
      username: this.state.userName,
      password: this.state.password
    })
      .then(() => console.log('signup Successful!'))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            onChangeText={value => this.onChangeText('userName', value)}
            value={this.state.userName}
            placeholder="username"
          />
          <TextInput
            style={styles.input}
            onChangeText={value => this.onChangeText('password', value)}
            value={this.state.password}
            placeholder="password"
          />
        </View>
        <ButtonLarge text="Enviar" handlePress={this.signUp} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#1E88E5',
    borderBottomWidth: 1,
    height: 50,
    marginBottom: 10
  },
  inputs: {
    marginBottom: 30
  }
});

export default SignIn;
