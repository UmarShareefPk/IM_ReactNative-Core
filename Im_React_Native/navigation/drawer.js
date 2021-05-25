import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import IncidentStack from './IncidentStack';
import UserStack from './UserStack';

const RootDrawerNavigator = createDrawerNavigator({
  Incidents1: {
    screen: IncidentStack,
  },
  Users: {
    screen: UserStack,
  },
  Incidents2: {
    screen: IncidentStack,
  },
});

export default createAppContainer(RootDrawerNavigator,{

});