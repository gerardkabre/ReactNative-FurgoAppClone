import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { AppNavigator } from 'react-native-navigation-actions';

import UserChoice from '../screens/UserChoice';
import UserDashboard from '../screens/UserDashboard';
import NewUserProject from '../screens/NewUserProject';
import AuthLoading from '../screens/AuthLoading';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import AuthChoice from '../screens/AuthChoice';

const AuthStack = createStackNavigator(
  {
    UserChoice: UserChoice,
    AuthChoice: AuthChoice,
    SignIn: SignIn,
    SignUp: SignUp
  },
  {
    initialRouteName: 'UserChoice',
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

const AppStack = createStackNavigator(
  {
    UserDashboard: UserDashboard,
    NewUserProject: NewUserProject
  },
  {
    initialRouteName: 'UserDashboard',
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

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default AppNavigator(RootStack);
