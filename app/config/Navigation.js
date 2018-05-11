import { createStackNavigator } from 'react-navigation';

import UserChoice from '../screens/UserChoice';
import UserDashboard from '../screens/UserDashboard';
import NewUserAd from '../screens/NewUserAd';

const Router = createStackNavigator(
  {
    userChoice: UserChoice,
    userDashboard: UserDashboard,
    newUserAd: NewUserAd
  },
  {
    initialRouteName: 'userChoice'
  }
);

export default Router;
