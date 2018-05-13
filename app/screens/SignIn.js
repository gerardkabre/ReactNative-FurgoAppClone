import React from 'react';
import { View, Button, AsyncStorage, TextInput, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import ButtonLarge from '../components/ButtonLarge';
import Container from '../components/Container';

class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Acceder',
    headerStyle: {
      backgroundColor: '#FFC400'
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  state = {
    username: '',
    password: ''
  };

  onChangeText = (key, value) => this.setState({ [key]: value });

  signIn = () => {
    console.log(this.state.password);
    console.log(this.state.username);
    Auth.signIn(this.state.username, this.state.password)
      .then(res => {
        console.log(res);
        this.props.navigation.navigate('App');
      })
      .catch(err => console.log(err));
  };

  // await AsyncStorage.setItem('userToken', 'abc');

  render() {
    return (
      <Container>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            onChangeText={value => this.onChangeText('username', value)}
            value={this.state.username}
            placeholder="puedes usar: 'gerard'"
          />
          <TextInput
            style={styles.input}
            onChangeText={value => this.onChangeText('password', value)}
            value={this.state.password}
            placeholder="contraseña: 'gerard'"
          />
        </View>
        <ButtonLarge text="Acceder" handlePress={this.signIn} />
        <ButtonLarge text="Crear cuenta" handlePress={() => this.props.navigation.navigate('SignUp')} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow'
  },
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
