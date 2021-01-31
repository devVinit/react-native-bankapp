import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import LogoSvg from '../../../assets/svgs/LogoSvg';

export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <LogoSvg />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
