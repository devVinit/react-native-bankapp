import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createStackNavigator<any>();

export function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName="SignUpScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    );
}