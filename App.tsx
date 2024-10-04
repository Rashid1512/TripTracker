import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  Button,
  View,
  Switch,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Geolocation from '@react-native-community/geolocation';
//import { ScrollView } from 'react-native-gesture-handler';
// Geolocation.setRNConfiguration(config);

export default function App() {
  function HomeScreen() {
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
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: 'white',
                marginLeft: 15,
                fontSize: 15,
                marginTop: 20,
              }}>
              Rs
            </Text>
            <Text style={{color: 'white', fontSize: 35, marginLeft: 10}}>
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
            <TouchableOpacity>
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
        <View style={{width: '98%', alignItems: 'flex-end', marginTop: 30}}>
          <TouchableOpacity>
            <Text style={{color: 'red'}}>View more</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold'}}>DATA</Text>
            <View
              style={{
                height: 100,
                width: 100,
                borderColor: 'lightgray',
                borderWidth: 3,
                borderRadius: 50,
              }}></View>
            <Text style={{fontWeight: 'bold'}}>Per MB</Text>
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold'}}>CALLS</Text>
            <View
              style={{
                height: 100,
                width: 100,
                borderColor: 'lightgray',
                borderWidth: 3,
                borderRadius: 50,
              }}></View>
            <Text style={{fontWeight: 'bold'}}>Per 60 s</Text>
          </View>

          <View
            style={{
              // borderColor: 'lightgray',
              // borderWidth: 1,
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold'}}>SMS</Text>
            <View
              style={{
                height: 100,
                width: 100,
                borderColor: 'lightgray',
                borderWidth: 3,
                borderRadius: 50,
              }}></View>
            <Text style={{fontWeight: 'bold'}}>Per</Text>
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
          <View style={{marginTop: 50}}>
            <Text>Packages</Text>
          </View>

          <View
            style={{
              borderColor: 'lightgray',
              borderWidth: 1,
              height: 80,
            }}></View>
          <View style={{marginTop: 50}}>
            <Text>Daily Rewards</Text>
          </View>

          <View
            style={{
              borderColor: 'lightgray',
              borderWidth: 1,
              height: 80,
            }}></View>

          <View style={{marginTop: 50}}>
            <Text>Make Your Bundle</Text>
          </View>

          <View
            style={{
              borderColor: 'lightgray',
              borderWidth: 1,
              height: 80,
            }}></View>

          <View style={{marginTop: 50}}>
            <Text>More</Text>
          </View>
        </View>
      </ScrollView>
    );
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
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: isEnabled ? 'orange' : 'white',
          },
        }}
        initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTintColor: isEnabled ? 'white' : 'black',
            headerStyle: {
              backgroundColor: isEnabled ? 'black' : 'white',
            },
            headerRight: () => (
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            ),
          }}
        />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
// });
