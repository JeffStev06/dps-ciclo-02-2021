import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

/* Screens */
import Cats from "../screens/Cats";
import Dogs from "../screens/Dogs";

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#841584',
      }}
    >
      <Tab.Screen
        name="cats"
        component={Cats}
        options={{ 
          title: "Gatos",
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cat" size={24} color={color} />
          ) }} 
      />
      <Tab.Screen
        name="dogs"
        component={Dogs}
        options={{ 
          title: "Perros",
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="dog" size={24} color={color} />
          ) }} 
      />
    </Tab.Navigator>
  );
}
