import React from 'react';
import RootStack from './config/Navigation';

import { Provider } from 'react-redux';
import store from './config/store';

const Index = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default Index;
