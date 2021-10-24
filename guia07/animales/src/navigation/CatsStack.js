import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cats from '../screens/Cats';

const Stack = createStackNavigator();

export default function CatsStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='cats'
                component={Cats}
                options={{title:'Gatos'}}
            />
        </Stack.Navigator>
    )
}