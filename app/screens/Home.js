import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

export default function Home({navigation}) {

    const pressHandlerSendImages = () => {
        navigation.navigate('SendImages');
        // navigation.push('SendImages');
    }

    const pressHandlerLearnReact = () => {
      navigation.navigate('LearnReact');
    }

    const pressHandlerChat = () => {
      navigation.navigate('Chat');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>
                For chat, click button below!
            </Text>
            <Button title='Chat' onPress={pressHandlerChat} />
            <Text style={styles.instructions}>
                For sending photos, click button below!
            </Text>
            <Button title='Send Images' onPress={pressHandlerSendImages} />
            <Text style={styles.instructions}>
                For play a game, click button below!
            </Text>
            <Button title='Second Page' onPress={pressHandlerLearnReact} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 20,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
    },
  });