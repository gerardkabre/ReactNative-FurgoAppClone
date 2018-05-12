import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './app/index';

import Amplify from 'aws-amplify';
import AWSConfig from './aws-exports';
Amplify.configure(AWSConfig);

const App = () => <Index />;

export default App;
