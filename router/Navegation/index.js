import React from 'react'

//React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

//Components
import TabNavegation from '../TabBar/index'
import Web from '../../screen/Web/index'

//Router
export default function Navegation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dasboard">
                <Stack.Screen name="Dasboard" component={TabNavegation} options={{headerShown: true}} />
                <Stack.Screen name="Web" component={Web} options={{headerShown: true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}