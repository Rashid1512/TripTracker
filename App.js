import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  Button,
  View,
  Switch,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import AboutScreen from './components/screens/AboutScreen';
import Stack2Screen from './components/Stack2Screen';
import Stack3Screen from './components/screens/Stack3Screen';
import DrawerFirstScreen from './components/screens/DrawerFirstScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
//import Geolocation from '@react-native-community/geolocation';
//import { ScrollView } from 'react-native-gesture-handler';
// Geolocation.setRNConfiguration(config);
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {

  function DrawerSecondScreen() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
    );
  }

  function Stack1Screen() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: isEnabled ? 'orange' : 'white',
          },
        }}
        initialRouteName="DrawerFirst">
        <Drawer.Screen
          name="DrawerFirst"
          component={DrawerFirstScreen}
          options={{
            headerTintColor: isEnabled ? 'white' : 'black',
            headerStyle: {
              backgroundColor: isEnabled ? 'black' : 'white',
            },
            headerRight: () => (
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            ),
          }}
        />
        <Drawer.Screen name="About" component={DrawerSecondScreen} />
      </Drawer.Navigator>
    );
  }


  function HomeScreen() {


    return (<Stack.Navigator>
      <Stack.Screen name="Stack1" component={Stack1Screen} />
      <Stack.Screen name="Recharge" component={Stack2Screen} />
      <Stack.Screen name="Stack3" component={Stack3Screen} />

    </Stack.Navigator>)
  }

  function SettingScreen() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
    );
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
// });
