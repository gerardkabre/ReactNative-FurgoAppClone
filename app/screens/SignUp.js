import React from 'react';
import {
  View,
  Button,
  AsyncStorage,
  TextInput,
  StyleSheet
} from 'react-native';

import { Auth } from 'aws-amplify';

import Separator from '../components/Separator';
import BackgroundText from '../components/BackgroundText';
import FormInput from '../components/FormInput';
import FormClickable from '../components/FormClickable';

class SignUp extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerRight: <Button title="Crear" onPress={() => params.signIn()} />,
      title: 'Crea tu cuenta'
    };
  };

  state = {
    username: '',
    password: ''
  };

  componentDidMount() {
    this.props.navigation.setParams({ signIn: () => this.signUp() });
  }

  onChange = (key, value) => this.setState({ [key]: value });

  signUp = () => {
    Auth.signUp({
      username: this.state.userName,
      password: this.state.password
    })
      .then(res => {
        this.props.navigation.navigate('SignIn');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View>
        <FormInput
          label="nombre"
          value={this.state.username}
          onChange={value => this.onChange('name', value)}
        />
        <FormInput
          label="Contraseña"
          value={this.state.password}
          onChange={value => this.onChange('password', value)}
        />
      </View>
    );
  }
}

export default SignUp;
