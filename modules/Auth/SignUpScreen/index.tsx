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
import { Feather } from '@expo/vector-icons';
import LogoSvg from '../../../assets/svgs/LogoSvg';
import LoginLoader from '../../../components/LoginLoader';
import CustomTextInput from '../../../components/CustomTextInput';

interface SignInScreenProps {
  navigation: any;
}

export default function SignInScreen({ navigation }: SignInScreenProps) {
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
                email: yup.string().matches(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/, 'Invalid email address').required('email address is required'),
                password: yup.string().required('password is required'),
                userName: yup.string().required('username is required'),
              })}
              onSubmit={(values) => handleSignUp()}
            >
              {
                ({ values, errors, touched, isSubmitting, handleChange, handleSubmit }: any) =>
                (
                  <>
                    <CustomTextInput
                      value={values.userName}
                      placeholder="Name"
                      onChangeText={handleChange('userName')}
                      style={styles.textInput}
                      validation={touched && touched.userName && errors && errors.userName}
                    />
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
                      validation={touched && touched.password && touched && errors && errors.password}
                    />
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
          </KeyboardAvoidingView>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={[styles.actionButtonText, { color: '#000', marginVertical: '20%' }]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', top: 0, left: 0 }}>
        <TouchableOpacity style={{ padding: 20 }} onPress={() => navigation.navigate('SignInScreen')}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View >
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
