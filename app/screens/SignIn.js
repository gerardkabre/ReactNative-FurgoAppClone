import React from 'react';
import { View, Button, ActivityIndicator } from 'react-native';

import Separator from '../components/Separator';
import BackgroundText from '../components/BackgroundText';
import FormInput from '../components/FormInput';
import FormClickable from '../components/FormClickable';
import Loading from '../components/Loading';

import { connect } from 'react-redux';

import { logIn } from '../actions/user';

class SignIn extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          title="Enviar"
          onPress={() => navigation.state.params.signIn()}
        />
      ),
      title: 'Entrar con email'
    };
  };

  state = {
    nombre: '',
    contraseña: ''
  };

  componentDidMount() {
    this.props.navigation.setParams({ signIn: () => this.signIn() });
  }

  onChange = (key, value) => this.setState({ [key]: value });

  signIn = () => {
    this.props.dispatch(
      logIn({ username: this.state.nombre, password: this.state.contraseña })
    );
  };

  render() {
    if (this.props.loginRequest) return <Loading />;
    return (
      <View>
        <Separator />
        <FormInput
          label="nombre"
          value={this.state.nombre}
          onChange={this.onChange}
          placeholder="pudes usar: admin"
        />
        <FormInput
          label="contraseña"
          value={this.state.contraseña}
          onChange={this.onChange}
          placeholder="pudes usar: pass"
        />
        <Separator />
        <BackgroundText text="¿No tienes cuenta?" />
        <FormClickable
          label="ir a crear cuenta"
          handlePress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginRequest: state.user.request
  };
};

export default connect(mapStateToProps)(SignIn);
