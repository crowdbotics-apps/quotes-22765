import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem180311Navigator from '../features/Additem180311/navigator';
import Maps180307Navigator from '../features/Maps180307/navigator';
import UserProfile180303Navigator from '../features/UserProfile180303/navigator';
import Maps175818Navigator from '../features/Maps175818/navigator';
import Additem175817Navigator from '../features/Additem175817/navigator';
import Maps175813Navigator from '../features/Maps175813/navigator';
import UserProfile175809Navigator from '../features/UserProfile175809/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem180311: { screen: Additem180311Navigator },
Maps180307: { screen: Maps180307Navigator },
UserProfile180303: { screen: UserProfile180303Navigator },
Maps175818: { screen: Maps175818Navigator },
Additem175817: { screen: Additem175817Navigator },
Maps175813: { screen: Maps175813Navigator },
UserProfile175809: { screen: UserProfile175809Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
