import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from './src/components/HomeScreen'
import WebScreen from './src/components/WebScreen'
import MapScreen from './src/components/MapScreen'
 
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Web:{
    screen: WebScreen
  },
  Map: {
    screen: MapScreen
  }
}, { initialRouteName: 'Home' })
 
export default createAppContainer (AppNavigator)