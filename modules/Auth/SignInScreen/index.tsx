import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import Constants from 'expo-constants';
import LogoSvg from '../../../assets/svgs/LogoSvg';

export default function SignInScreen() {

  const isIos = Platform.OS === "ios";

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            style={{ width: '100%' }}
            contentContainerStyle={{ alignItems: 'center' }}
            behavior="position">
            <View style={styles.logoContainer}>
              <LogoSvg />
            </View>
            <Text style={styles.title}>Welcome</Text>
            <Pressable
              android_ripple={{ color: 'black', borderless: false }}
              style={({ pressed }) => [styles.actionButton, { backgroundColor: (pressed && isIos) ? '#2e50f8' : '#2E64F8' }]}>
              <Text style={styles.actionButtonText}>Login with Facebook</Text>
            </Pressable>
            <Pressable
              android_ripple={{ color: 'black', borderless: false }}
              style={({ pressed }) => [styles.actionButton, { backgroundColor: (pressed && isIos) ? '#ff4b2b' : '#FF632B' }]}>
              <Text style={styles.actionButtonText}>Login with Google</Text>
            </Pressable>
            <View style={styles.separatorContainer}>
              <View style={styles.separator} />
              <Text style={styles.separatorText}>or</Text>
              <View style={styles.separator} />
            </View>
            <TextInput
              value={''}
              placeholder="Email"
              onChangeText={(text) => console.log(text)}
              style={styles.textInput}
            />
            <TextInput
              value={''}
              placeholder="Password"
              onChangeText={(text) => console.log(text)}
              style={styles.textInput}
            />
            <Pressable
              android_ripple={{ color: 'gray', borderless: false }}
              style={({ pressed }) => [styles.actionButton, { backgroundColor: (pressed && isIos) ? 'gray' : '#000618' }]}>
              <Text style={styles.actionButtonText}>Sign in</Text>
            </Pressable>
          </KeyboardAvoidingView>
          <TouchableOpacity>
            <Text style={[styles.actionButtonText, { color: '#000', marginVertical: '20%' }]}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logoContainer: {
    marginBottom: '7%',
    marginTop: '25%',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter_600SemiBold',
    lineHeight: 38,
    marginBottom: '7%',
  },
  actionButton: {
    width: '100%',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter_400Regular'
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    marginHorizontal: '5%',
    height: 2,
    backgroundColor: '#E7E9F3',
    borderRadius: 0.5,
    width: '42%',
  },
  separatorText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    lineHeight: 20,
    color: '#9FA4BC',
  },
  textInput: {
    padding: 18,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    width: '100%',
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginVertical: 5,
  }
});
