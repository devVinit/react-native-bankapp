import * as React from 'react';
import { AuthNavigator } from './Auth/AuthNavigator';

export function AppNavigator() {

    const isLoggedIn = false;

    return (
        <AuthNavigator />
    );
}
