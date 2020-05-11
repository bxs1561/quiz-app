import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonStyle}
        buttonStyle={{backgroundColor: 'rgb( 66,103,178)', borderRadius: 30}}
        title="Nepali"
        // onPress={() => navigation.navigate('Nepali')}
        onPress={() => navigation.navigate('Nepali')}


      />
      <Button
        style={styles.buttonStyle}
        buttonStyle={{backgroundColor: 'rgb( 66,103,178)', borderRadius: 30}}
        title="English"
        onPress={() => navigation.navigate('English')}
      />
        <Button
            style={styles.buttonStyle}
            buttonStyle={{backgroundColor: 'rgb( 66,103,178)', borderRadius: 30}}
            title="Learn"
            onPress={() => navigation.navigate('Learn')}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,119,181)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10,
    width: 300,
  },
});
export default HomeScreen
