import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WebLocalScreen from './components/WebLocalScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: WebLocalScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
