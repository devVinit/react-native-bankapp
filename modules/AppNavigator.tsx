import * as React from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { AuthNavigator } from './Auth/AuthNavigator';
import { MainNavigator } from './Main/MainNavigator';

export function AppNavigator() {
    const [isLoggedIn, _] = useAuth();
    return (
        isLoggedIn ? <MainNavigator /> : <AuthNavigator />
    );
}
