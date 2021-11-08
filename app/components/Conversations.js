import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import im from '../assets/profil.png';
//import { useNavigation } from "@react-navigation/core";
import styles from "./Styles";

export default function Conversations (props) {
    const newMessages = props.conversatii.newMessages;
    const lastMessage = props.conversatii.lastMessage.content;
    const createdAt = props.conversatii.lastMessage.createdAt;
    const user = props.conversatii.users[1];

    const navigation = props.nav;
    const onPress = () => {
        console.log(user.name);
        navigation.navigate('ChatRoom', {id: props.conversatii.id});
    }
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={{uri: user.imageUri}} style={styles.image} />

            {newMessages && <View style={styles.newMessageContainer}>
                <Text style={styles.newMessageNumber}>{newMessages}</Text>
            </View>}

            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text> 
                    <Text style={styles.text}>{createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>{lastMessage}</Text>
            </View>
        </Pressable>
    )
}