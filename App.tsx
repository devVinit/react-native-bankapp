import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading'
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';

import useCachedResources from './hooks/useCachedResources';
import { AppNavigator } from './modules/AppNavigator';

export default function App() {
  const isLoadingComplete = useCachedResources();
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!isLoadingComplete || !fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
        <StatusBar backgroundColor="#fff" />
      </SafeAreaProvider>
    );
  }
}

