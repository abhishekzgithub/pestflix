import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
// import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import ServiceDetails from '../components/ServiceDetails';
import BookingSlot from '../screens/BookingSlot';
import OrderSummary from '../screens/OrderSummary';
import OrderConfirmationScreen from "../screens/OrderConfirmation"
// import Browse from '../screens/Browse';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';

const screens = createStackNavigator({
    //Welcome,
    //Login,
    //Register,
    // Forgot,
    //Explore,
   // ServiceDetails,
   //BookingSlot,
   //OrderSummary,
   OrderConfirmationScreen,
    // Browse,
    // Product,
    // Settings,
  }, {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image/>,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    }
  });
  
  export default createAppContainer(screens);