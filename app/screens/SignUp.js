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
import Loading from '../components/Loading';

import { connect } from 'react-redux';

import { register } from '../actions/user';

class SignUp extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerRight: <Button title="Crear" onPress={() => params.signIn()} />,
      title: 'Crea tu cuenta'
    };
  };

  state = {
    nombre: '',
    contraseña: '',
    email: ''
  };

  componentDidMount() {
    this.props.navigation.setParams({ signIn: () => this.signUp() });
  }

  onChange = (key, value) => this.setState({ [key]: value });

  signUp = () => {
    this.props.dispatch(
      register({
        username: this.state.nombre,
        password: this.state.contraseña,
        attributes: {
          email: this.state.email
        }
      })
    );
  };

  render() {
    if (this.props.registerRequest) return <Loading />;
    return (
      <View>
        <FormInput
          label="nombre"
          value={this.state.nombre}
          onChange={this.onChange}
          placeholder="nombre"
        />
        <FormInput
          label="contraseña"
          value={this.state.contraseña}
          onChange={this.onChange}
          placeholder="contraseña"
        />
        <FormInput
          label="email"
          value={this.state.email}
          onChange={this.onChange}
          placeholder="email"
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    registerRequest: state.user.registerRequest
  };
};

export default connect(mapStateToProps)(SignUp);
