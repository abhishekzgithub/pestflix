import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
// import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import ServiceDetails from '../components/ServiceDetails';
import BookingSlot from '../screens/BookingSlot';
import OrderSummary from '../screens/OrderSummary';
import OrderConfirmationScreen from "../screens/OrderConfirmation"
//import LocationConfirmation from "../screens/LocationConfirmation"

// import Browse from '../screens/Browse';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';

const screens = createStackNavigator({
    //Welcome,
    //Login,
    //Register,
    // Forgot,
    //Explore,
   //ServiceDetails,
   BookingSlot,
   //OrderSummary,
   //OrderConfirmationScreen,
   //LocationConfirmation,
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

  // const createDrawer = () => (
  //   <Drawer.Navigator
  //     initialRouteName="Home"
  //     contentOptions={(activeTintColor = 'red')}
  //     drawerContent={props => <CustomSidebarMenu {...props} />}>
  //     <Drawer.Screen name="Home" component={HomeScreen} />
  //     <Drawer.Screen name="Profile" component={ProfileScreen} />
  //     <Drawer.Screen name="Category" component={CategoryScreen} />
  //     <Drawer.Screen name="Offers" component={OffersScreen} />
  //     <Drawer.Screen name="NewProducts" component={NewProductScreen} />
  //     <Drawer.Screen name="PopularProducts" component={PopularProductScreen} />
  //     <Drawer.Screen name="MyCart" component={MyCartScreen} />
  //     <Drawer.Screen name="MyOrder" component={MyOrder} />
  //   </Drawer.Navigator>
  // );
  
  export default createAppContainer(screens);