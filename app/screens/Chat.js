import React from "react";
import { Image, StyleSheet, Text, View, FlatList, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Conversations from "../components/Conversations";

import conversatii from "../dummy-data/ChatRooms";

export default function Chat ({navigation}) {

    return (
        <View style={styles.container}>
            <FlatList 
            data={conversatii}
            renderItem={({item}) => <Conversations conversatii={item} nav={navigation} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})