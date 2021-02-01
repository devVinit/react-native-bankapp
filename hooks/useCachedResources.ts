import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { AsyncStorage } from 'react-native';
import { useAuth } from '../Contexts/AuthContext';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = useAuth();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log({ isLoggedIn });
        token && setLoggedIn();
        SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
