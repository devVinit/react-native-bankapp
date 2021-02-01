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
import { Formik } from 'formik';
import * as yup from 'yup';
import LogoSvg from '../../../assets/svgs/LogoSvg';
import LoginLoader from '../../../components/LoginLoader';

export default function SignInScreen() {
  const isIos = Platform.OS === "ios";
  const [loginLoader, setLoginLoader] = React.useState<string | null>();

  const handleSignUp = () => {
    setLoginLoader('email');
    setTimeout(() => {
      setLoginLoader(null);
    }, 1000);
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
            <Text style={styles.title}>Create Account</Text>
            <Formik
              enableReinitialize
              initialTouched={{
                email: false,
                password: false,
                userName: false,
              }}
              initialValues={{
                email: '',
                password: '',
                userName: '',
              }}
              validationSchema={yup.object().shape({
                email: yup.string().matches(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/).required(),
                password: yup.string().required(),
                userName: yup.string().required(),
              })}
              onSubmit={(values) => handleSignUp()}
            >
              {
                ({ values, errors, touched, isSubmitting, handleChange, handleSubmit }: any) =>
                (
                  <>
                    <TextInput
                      value={values.userName}
                      placeholder="Name"
                      onChangeText={handleChange('userName')}
                      style={styles.textInput}
                    />
                    {touched && touched.email && errors && errors.email && <Text style={styles.textErrorText}>Name is required</Text>}
                    <TextInput
                      value={values.email}
                      onChangeText={handleChange('email')}
                      placeholder="Email"
                      style={styles.textInput}
                    />
                    {touched && touched.email && errors && errors.email && <Text style={styles.textErrorText}>Invalid Email Address</Text>}
                    <TextInput
                      secureTextEntry={true}
                      value={values.password}
                      placeholder="Password"
                      onChangeText={handleChange('password')}
                      style={styles.textInput}
                    />
                    {touched && touched.password && touched && errors && errors.password && <Text style={styles.textErrorText}>Password is Required</Text>}
                    <Pressable
                      disabled={isSubmitting}
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
              <Text style={styles.actionButtonText}>Sign Up!</Text>
            </Pressable>
          </KeyboardAvoidingView>
          <TouchableOpacity>
            <Text style={[styles.actionButtonText, { color: '#000', marginVertical: '20%' }]}>Sign In</Text>
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
  textInput: {
    padding: 18,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    width: '100%',
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginVertical: 5,
  },
  textErrorText: {
    color: '#FF632B',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    textAlign: 'left',
  }
});
