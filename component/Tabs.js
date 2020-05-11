import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import NepaliPage from './NepaliPage';
import DataPage from './MainPage';
import {Icon} from 'react-native-elements';
import HomeScreen from './HomeScreen';
import Learn from './Learn';

const NepaliStack = createStackNavigator();
const NepaliScreen = () => {
  return (
    <NepaliStack.Navigator>
      <NepaliStack.Screen name="Nepali" component={NepaliPage} />
    </NepaliStack.Navigator>
  );
};

const EnglishStack = createStackNavigator();

const EnglishScreen = () => {
  return (
    <EnglishStack.Navigator>
      <EnglishStack.Screen name="English" component={DataPage} />
    </EnglishStack.Navigator>
  );
};

const HomeStack = createStackNavigator();

const HomeScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
const Stack = createStackNavigator();

const Tabs = () =>{
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Nepali" component={NepaliPage} />
            <Stack.Screen name="English" component={DataPage} />
            <Stack.Screen name="Learn" component={Learn} />
        </Stack.Navigator>

    )
}

// const Tab = createBottomTabNavigator();
// const Tabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;
//           let types = 'material-community';
//           if (route.name === 'Home') {
//             iconName = 'home';
//           }
//           return (
//             <Icon type={types} name={iconName} size={size} color={color} />
//           );
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}>
//       <Tab.Screen name="Home" component={HomeScreens} />
//         {/*<Tab.Screen name="English" component={EnglishScreen} />*/}
//
//         {/*<Tab.Screen name="Nepali" component={NepaliScreen} />*/}
//
//     </Tab.Navigator>
//   );
// };
export default Tabs;
