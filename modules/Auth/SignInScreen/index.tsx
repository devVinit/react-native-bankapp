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
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import Constants from 'expo-constants';
import { Formik } from 'formik';
import * as yup from 'yup';
import LogoSvg from '../../../assets/svgs/LogoSvg';
import LoginLoader from '../../../components/LoginLoader';
import { useAuth } from '../../../Contexts/AuthContext';
import CustomTextInput from '../../../components/CustomTextInput';

interface SignUpScreenProps {
  navigation: any;
}

export default function SignInScreen({ navigation }: SignUpScreenProps) {
  const isIos = Platform.OS === "ios";
  const [loginLoader, setLoginLoader] = React.useState<string | null>();

  const [_, setLoggedIn] = useAuth();

  const handleLogin = (type: string) => {
    setLoginLoader(type);
    setTimeout(() => {
      setLoggedIn();
    }, 1000);
    AsyncStorage.setItem('token', 'SignUpToken');
  }

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
              onPress={() => handleLogin('facebook')}
              android_ripple={{ color: 'black', borderless: false }}
              style={({ pressed }) => [styles.actionButton, { backgroundColor: (pressed && isIos) ? '#2e50f8' : '#2E64F8' }]}>
              {loginLoader !== 'facebook' && <Text style={styles.actionButtonText}>Login with Facebook</Text>}
              {loginLoader === 'facebook' && <LoginLoader />}
            </Pressable>
            <Pressable
              onPress={() => handleLogin('google')}
              android_ripple={{ color: 'black', borderless: false }}
              style={({ pressed }) => [styles.actionButton, { backgroundColor: (pressed && isIos) ? '#ff4b2b' : '#FF632B' }]}>
              {loginLoader !== 'google' && <Text style={styles.actionButtonText}>Login with Google</Text>}
              {loginLoader === 'google' && <LoginLoader />}
            </Pressable>
            <View style={styles.separatorContainer}>
              <View style={styles.separator} />
              <Text style={styles.separatorText}>or</Text>
              <View style={styles.separator} />
            </View>
            <Formik
              enableReinitialize
              initialTouched={{
                email: false,
                password: false,
              }}
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={yup.object().shape({
                email: yup.string().matches(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/, 'Invalid email address').required('email address is required'),
                password: yup.string().required('password is required'),
              })}
              onSubmit={(values) => handleLogin('email')}
            >
              {
                ({ values, errors, touched, isSubmitting, handleChange, handleSubmit }: any) =>
                (
                  <>
                    <CustomTextInput
                      value={values.email}
                      onChangeText={handleChange('email')}
                      placeholder="Email"
                      style={styles.textInput}
                      validation={touched && touched.email && errors && errors.email}
                    />
                    <CustomTextInput
                      secureTextEntry={true}
                      value={values.password}
                      placeholder="Password"
                      onChangeText={handleChange('password')}
                      style={styles.textInput}
                      validation={touched && touched.password && errors && errors.password}
                    />
                    <Pressable
                      // disabled={isSubmitting}
                      onPress={handleSubmit}
                      android_ripple={{ color: 'gray', borderless: false }}
                      style={({ pressed }) => [styles.actionButton, { backgroundColor: (pressed && isIos) ? 'gray' : '#000618' }]}>
                      {(loginLoader !== 'email') && <Text style={styles.actionButtonText}>Sign in</Text>}
                      {loginLoader === 'email' && <LoginLoader />}
                    </Pressable>
                  </>
                )
              }
            </Formik>
          </KeyboardAvoidingView>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
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
    paddingHorizontal: 20,
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
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 30,
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
  textErrorText: {
    color: '#FF632B',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    textAlign: 'left',
  },
  textInput: {
    padding: 18,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    width: '100%',
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginVertical: 5,
  },
});
