import * as React from 'react';
import { AuthNavigator } from './Auth/AuthNavigator';
import { MainNavigator } from './Main/MainNavigator';

export function AppNavigator() {

    const isLoggedIn = true;

    return (
        <MainNavigator />
    );
}
