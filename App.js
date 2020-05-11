/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DataPage from './component/MainPage';
import NepaliPage from './component/NepaliPage';
import Both from './component/Both';
import Tabs from './component/Tabs';
import Learn from './component/Learn';
const App = () => {
  return (
       <NavigationContainer>
       < Tabs/>
      </NavigationContainer>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;

