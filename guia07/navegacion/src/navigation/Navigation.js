import React from 'react';

/* Navigation */
//import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/* Screens */
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="home" 
                component={Home} 
                options={{title: 'Home'}}
            />
            <Tab.Screen 
                name="about" 
                component={About} 
                options={{title: 'About'}}
            />
            <Tab.Screen 
                name="contact" 
                component={Contact} 
                options={{title: 'Contact'}}
            />
        </Tab.Navigator>
    )
}