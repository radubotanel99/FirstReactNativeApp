import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform} from 'react-native'
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'; 

export default function MessageInput () {
    const [message, setMessage] = useState('');

    const sendMessage = () => {

    }
    const onPress = () => {
        if(message) sendMessage();
    }
    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={200}
        >
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Your Message...'
                    value={message}
                    onChangeText={(newMessage) => setMessage(newMessage)}
                />
                <Feather name="camera" size={24} style={styles.icon} />
                <MaterialCommunityIcons name="microphone-outline" size={24} style={styles.icon} />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? <Ionicons name="send-outline" size={24} color="black" /> :
                    <AntDesign name="plus" size={24} color="white" /> }
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    inputContainer: {
        backgroundColor: 'lightgray',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 35,
    },
    input: {
        flex: 1,
    },
    icon: {
        marginHorizontal: 5,
        color: 'gray'
    },
})