// // Example: Example of SQLite Database in React Native
// // https://aboutreact.com/example-of-sqlite-database-in-react-native
// import 'react-native-gesture-handler';

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// import Home from './pages/Home';
// import Staff from './pages/Staff';
// import Products from './pages/Products';
// import Customer from './pages/Customer';
// import Booking from './pages/Booking';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             title: 'Mobile', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#009999', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Staff"
//           component={Staff}
//           options={{
//             title: 'Staff', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#009999', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />

//           <Stack.Screen
//           name="Products"
//           component={Products}
//           options={{
//             title: 'Products', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#009999', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />

//           <Stack.Screen
//           name="Customer"
//           component={Customer}
//           options={{
//             title: 'Customer', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#009999', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />

//           <Stack.Screen
//           name="Booking"
//           component={Booking}
//           options={{
//             title: 'Booking', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#009999', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
       
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

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

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Staff: { screen: StaffScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#336633',
      },
      headerTintColor: '#FFFFFF',
      title: 'MANGROVE',
      //Header title
    },
  }
);
const StaffStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
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
    Staff: { screen: StaffScreen },
    Packages: { screen: PackagesScreen },
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
    Customer: { screen: CustomerScreen },
    Staff: { screen: StaffScreen },
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
    Customer: { screen: CustomerScreen },
    Staff: { screen: StaffScreen },
    Packages: { screen: PackagesScreen },
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





const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Staff: { screen: StaffStack },
    Customer: { screen: CustomerStack },
    Packages: { screen: PackagesStack },
    Booking: { screen: BookingStack },
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