import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

interface Props extends TextInputProps {
    validation: string;
}

const CustomTextInput = (props: Props) => {
    const [isShowVisibility, setIsShowVisibility] = React.useState<boolean>();
    return (
        <View style={styles.container}>
            <TextInput
                value={props.value}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                style={styles.textInput}
                secureTextEntry={props.secureTextEntry === true ? (!isShowVisibility) : false}
            />
            {(props.secureTextEntry === true && Boolean(props.value) && props.value?.length > 0) && <TouchableOpacity
                style={styles.rightIconContainer}
                onPress={() => setIsShowVisibility(!isShowVisibility)}>
                <MaterialIcons name={isShowVisibility ? 'visibility' : 'visibility-off'} size={24} color="#000" />
            </TouchableOpacity>}
            {(props.validation) && <>
                <View style={styles.rightIconContainer}>
                    <View style={styles.infoContainer}>
                        <Entypo name="info" size={15} color="#fff" />
                    </View>
                </View>
                <View style={{ backgroundColor: '#FF632B', position: 'absolute', top: -15, borderRadius: 5, right: 20 }}>
                    <Text style={styles.infoText}>{props.validation}</Text>
                    <View style={styles.invertedTriangle} />
                </View>
            </>}
        </View>
    )
}

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        borderRadius: 8,
        backgroundColor: '#F8F8F8',
        width: '100%',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        paddingVertical: 18,
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        width: '90%',
        height: '100%',
    },
    rightIconContainer: {
        justifyContent: 'center',
        width: '10%',
        alignItems: 'center',
    },
    infoContainer: {
        height: 24,
        width: 24,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF632B',
    },
    infoText: {
        fontSize: 14,
        fontFamily: 'Inter_400Regular',
        color: '#fff',
        padding: 5,
    },
    invertedTriangle: {
        position: 'absolute',
        right: 10,
        bottom: -4,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: "#FF632B",
        transform: [
            {
                rotateX: '180deg'
            }
        ]
    }
})
