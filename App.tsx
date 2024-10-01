
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Button, View, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Geolocation from '@react-native-community/geolocation';
// Geolocation.setRNConfiguration(config);
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={()=>{Geolocation.getCurrentPosition(info => console.log(info))
}} title="Go back home" />
    </View>
  );
}



export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} 
        options={{ headerRight: () => (
          <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        ),}}/>
        <Drawer.Screen name="About" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}




// const styles = StyleSheet.create({ 
// });

