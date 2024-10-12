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
  function DrawerFirstScreen({ navigation }) {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: isEnabled ? 'black' : 'white',
        }}>
        <View
          style={{
            backgroundColor: 'black',
            width: '95%',
            height: 150,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              marginTop: 30,
              marginLeft: 10,
              fontSize: 15,
            }}>
            Your balance is
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'white',
                marginLeft: 15,
                fontSize: 15,
                marginTop: 20,
              }}>
              Rs
            </Text>
            <Text style={{ color: 'white', fontSize: 35, marginLeft: 10 }}>
              0
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'red',
              width: '90%',
              height: 40,
              alignSelf: 'center',
              marginTop: 10,
              top: 20,
              borderRadius: 2,
            }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Recharge') }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                TAP TO RECHARGE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '98%', alignItems: 'flex-end', marginTop: 30 }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Stack3') }}>
            <Text style={{ color: 'red' }}>View more</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'bold' }}>DATA</Text>
            <View
              style={{
                height: 100,
                width: 100,
                borderColor: 'lightgray',
                borderWidth: 3,
                borderRadius: 50,
              }}></View>
            <Text style={{ fontWeight: 'bold' }}>Per MB</Text>
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'bold' }}>CALLS</Text>
            <View
              style={{
                height: 100,
                width: 100,
                borderColor: 'lightgray',
                borderWidth: 3,
                borderRadius: 50,
              }}></View>
            <Text style={{ fontWeight: 'bold' }}>Per 60 s</Text>
          </View>

          <View
            style={{
              // borderColor: 'lightgray',
              // borderWidth: 1,
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'bold' }}>SMS</Text>
            <View
              style={{
                height: 100,
                width: 100,
                borderColor: 'lightgray',
                borderWidth: 3,
                borderRadius: 50,
              }}></View>
            <Text style={{ fontWeight: 'bold' }}>Per</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderColor: 'lightgray',
            borderWidth: 1,
            marginTop: 20,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <View style={{ marginTop: 50 }}>
            <Text>Packages</Text>
          </View>

          <View
            style={{
              borderColor: 'lightgray',
              borderWidth: 1,
              height: 80,
            }}></View>
          <View style={{ marginTop: 50 }}>
            <Text>Daily Rewards</Text>
          </View>

          <View
            style={{
              borderColor: 'lightgray',
              borderWidth: 1,
              height: 80,
            }}></View>

          <View style={{ marginTop: 50 }}>
            <Text>Make Your Bundle</Text>
          </View>

          <View
            style={{
              borderColor: 'lightgray',
              borderWidth: 1,
              height: 80,
            }}></View>

          <View style={{ marginTop: 50 }}>
            <Text>More</Text>
          </View>
        </View>
        <View
          style={{
            borderColor: 'lightgray',
            borderWidth: 3,
            marginTop: 10,
          }}></View>


        <View
          style={{
            borderColor: 'lightgray',
            borderWidth: 3,
            marginTop: 150,
          }}></View>
        <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>SPECIAL OFFERS RS.1/-</Text>
          <TouchableOpacity>
            <Text style={{ color: 'red', marginLeft: 180 }}>View more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
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
  function Stack2Screen() {
    return (<View>
      <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
        <View>
          <Text style={{ color: 'gray', fontSize: 15 }}>Pay with</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>JazzCash</Text>
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>
            {'>'}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
        <View>
          <Text style={{ color: 'gray', fontSize: 15 }}>Pay with</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Credit/Debit Card</Text>
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>
            {'>'}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
        <View>
          <Text style={{ color: 'gray', fontSize: 15 }}>Pay with</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Scratch Card</Text>
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>
            {'>'}
          </Text>
        </View>
      </View>

    </View>)
  }

  function Stack3Screen() {
    return (<View>
      <View>
        <Text style={{ textAlign: 'center', color: 'gray', marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>
          Subscribed Packages
        </Text>
        <Text style={{ marginTop: 40, fontWeight: 'bold', color: 'black', marginLeft: 10, fontSize: 15 }}>
          More Services
        </Text>
      </View>
      <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>International Roaming</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: 'red' }}>
            Rs 0.00
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 30, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>International Roaming</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: 'red' }}>
            Rs 0.00
          </Text>
        </View>
      </View>


    </View>)

  }
  function HomeScreen() {


    return (<Stack.Navigator>
      <Stack.Screen name="Stack1" component={Stack1Screen} />
      <Stack.Screen name="Recharge" component={Stack2Screen} />
      <Stack.Screen name="Stack3" component={Stack3Screen} />

    </Stack.Navigator>)
  }
  function AboutScreen() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
    );
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
