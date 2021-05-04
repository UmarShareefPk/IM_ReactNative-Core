import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import IncidentStack from './IncidentStack';
// import AboutStack from './aboutStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: IncidentStack,
  },
  // About: {
  //   screen: AboutStack,
  // },
});

export default createAppContainer(RootDrawerNavigator);