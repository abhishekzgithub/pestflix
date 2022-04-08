import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import AppContainer from './index.js';
// import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
// import Welcome from './screens/Welcome';
import {Component} from 'react';
import Login from './screens/Login.js';
import Register from './screens/Register';
import Explore from './screens/Explore';
import ServiceDetailsScreen from './screens/ServiceDetails';
import ServiceCategoryItemDetailsScreen from './screens/ServiceCategoryItemDetails';
import BookingSlot from './screens/BookingSlot';
import OrderSummary from './screens/OrderSummary';
import OrderConfirmationScreen from "./screens/OrderConfirmation";
//import LocationConfirmation from "../screens/LocationConfirmation"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createDrawer = () => (
    <Drawer.Navigator
      initialRouteName="Order Summary"
      //contentOptions={(activeTintColor = 'red')}
      // drawerContent={props => <CustomSidebarMenu {...props} />}
      >
       
       <Drawer.Screen name="Home" component={Explore} />
       <Drawer.Screen name="Login" component={Login} />
       <Drawer.Screen name="Register" component={Register} />
       <Drawer.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
       <Drawer.Screen name="ServiceItemDetails" component={ServiceCategoryItemDetailsScreen} />
       <Drawer.Screen name="BookingSlot" component={BookingSlot} />
       <Drawer.Screen name="Order Summary" component={OrderSummary} />
       <Drawer.Screen name="OrderConfirmationScreen" component={OrderConfirmationScreen} />
       <Drawer.Screen name="NY Location" component={Explore} />
       <Drawer.Screen name="NY Bookings" component={Explore} />
       <Drawer.Screen name="NY Profile" component={Explore} />
       <Drawer.Screen name="NY Scheduled Bookings" component={Explore} />
       <Drawer.Screen name="NY Settings" component={Explore} />
       <Drawer.Screen name="NY Logout" component={Explore} />
    </Drawer.Navigator>
  );

  RootStackScreen = () => (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
      >
      {/* <RootStack.Screen name="Main" component={this.MainStackScreen} /> */}
      {/* <RootStack.Screen
        name="ProductView"
        component={this.ProductStackScreen}
      /> */}
      {/* <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Register" component={Register} /> */}
      {/* <RootStack.Screen name="OTP" component={OTPScreen} />
      <RootStack.Screen
        name="ForgetPassword"
        component={ForgotPasswordScreen}
      /> */}
      <RootStack.Screen name="HomeScreen" children={this.createDrawer} />
    </RootStack.Navigator>
  );
    render() {
    return <NavigationContainer>
      {this.RootStackScreen()}
      </NavigationContainer>;
  }
}
