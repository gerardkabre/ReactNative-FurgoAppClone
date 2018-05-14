import React, { Component } from 'react';
import { View, Button } from 'react-native';

import Separator from '../components/Separator';
import BackgroundText from '../components/BackgroundText';
import FormInput from '../components/FormInput';
import Container from '../components/Container';

class NewUserProject extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerRight: (
        <Button
          title="Enviar"
          color="#841584"
          onPress={() => params.signIn()}
        />
      ),
      title: 'Nuevo anuncio'
    };
  };

  state = {};

  render() {
    return (
      <View>
        <Separator />
        <FormInput label="Lugar" placeholder="Barcelona" />
        <FormInput label="Distancia" placeholder="100km" />
        <FormInput label="Fecha" placeholder="01/06/18" />
        <FormInput label="Hora" placeholder="18:00" />
        <Separator />
        <BackgroundText text="Datos del producto" />
        <FormInput label="Descripción" placeholder="Describe el producto" />
      </View>
    );
  }
}

export default NewUserProject;
