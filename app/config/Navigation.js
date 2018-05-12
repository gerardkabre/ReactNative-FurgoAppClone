import { createStackNavigator } from 'react-navigation';

import UserChoice from '../screens/UserChoice';
import UserDashboard from '../screens/UserDashboard';
import NewUserProject from '../screens/NewUserProject';

const Router = createStackNavigator(
  {
    userChoice: UserChoice,
    userDashboard: UserDashboard,
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

export default Router;
