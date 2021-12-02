import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName= "Home"
        screenOptions= {({route})=> ({
          tabBarIcon: ({focused, color, size})=> {
            let iconName;
            console.log(route);
            if(route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}>
          <Tab.Screen name="Home" component = {HomeScreen} />
          <Tab.Screen name="List" component = {ListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
