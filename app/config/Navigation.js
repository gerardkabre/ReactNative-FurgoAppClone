import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import UserChoice from '../screens/UserChoice';
import UserDashboard from '../screens/UserDashboard';
import NewUserProject from '../screens/NewUserProject';
import AuthLoading from '../screens/AuthLoading';
import SignIn from '../screens/SignIn';

const AppStack = createStackNavigator(
  {
    UserDashboard: UserDashboard,
    NewUserProject: NewUserProject
  },
  {
    initialRouteName: 'userChoice',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFC400'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const AuthStack = createStackNavigator({
  UserChoice: UserChoice,
  SignIn: SignIn
});

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default RootStack;
