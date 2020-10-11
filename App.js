//This is an example code for Bottom Navigation//
import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import CustomerScreen from './pages/CustomerScreen';
import StaffScreen from './pages/StaffScreen';
import PackagesScreen from './pages/PackagesScreen';
import BookingScreen from './pages/BookingScreen';
import Search from './pages/Search';
import Conclution from './pages/Conclution';
import QrCode from './pages/QrCode';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    // Staff: { screen: StaffScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#336633',
      },
      headerTintColor: '#FFFFFF',
      title: 'FOREST TOUR',
      //Header title
    },
  }
);
const StaffStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    // Home: { screen: HomeScreen },
    Staff: { screen: StaffScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#336633',
      },
      headerTintColor: '#FFFFFF',
      title: 'Staff',
      //Header title
    },
  }
);
const CustomerStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Customer: { screen: CustomerScreen },
    // Staff: { screen: StaffScreen },
    // Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#336633',
      },
      headerTintColor: '#FFFFFF',
      title: 'Customer',
      //Header title
    },
  }
);
const PackagesStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    // Customer: { screen: CustomerScreen },
    // Staff: { screen: StaffScreen },
    Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#336633',
      },
      headerTintColor: '#FFFFFF',
      title: 'Packages',
      //Header title
    },
  }
);
const BookingStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    // Customer: { screen: CustomerScreen },
    // Staff: { screen: StaffScreen },
    Booking: { screen: BookingScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#336633',
      },
      headerTintColor: '#FFFFFF',
      title: 'Booking',
      //Header title
    },
  }
);
const ConclutionStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    // Customer: { screen: CustomerScreen },
    // Staff: { screen: StaffScreen },
    Conclution: { screen: Conclution },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#336633',
      },
      headerTintColor: '#FFFFFF',
      title: 'Conclution',
      //Header title
    },
  }
);
const SearchStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    // Customer: { screen: CustomerScreen },
    // Staff: { screen: StaffScreen },
    Search: { screen: Search },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#336633',
      },
      headerTintColor: '#FFFFFF',
      title: 'Webview',
      //Header title
    },
  }
);
const QrCodeStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    // Customer: { screen: CustomerScreen },
    // Staff: { screen: StaffScreen },
    Search: { screen: QrCode },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#336633',
      },
      headerTintColor: '#FFFFFF',
      title: 'QRCODE',
      //Header title
    },
  }
);




const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Staff: { screen: StaffStack },
    Customer: { screen: CustomerStack },
    Packages: { screen: PackagesStack },
    Booking: { screen: BookingStack },
    Cons: { screen: ConclutionStack },
    Search: { screen: SearchStack },
    Qrcode: { screen: QrCodeStack },
  },
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let IconComponent = Ionicons;
  //       let iconName;
  //       if (routeName === 'Staff') {
  //         iconName = `ios-information-circle${focused ?
  //           '' : '-outline'
  //         }`;
  //       } else if (routeName === 'Settings') {
  //         iconName = `ios-checkmark-circle${focused ?
  //           '' : '-outline'
  //         }`;
  //       }
  //       return <IconComponent
  //                name={iconName}
  //                size={25}
  //                color={tintColor}
  //              />;
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: '#42f44b',
  //     inactiveTintColor: 'gray',
  //   },
  // }
);
export default createAppContainer(App);