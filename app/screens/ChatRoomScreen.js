import React from 'react'
import { View, StyleSheet, FlatList, SafeAreaView, Dimensions, ScrollView, Text} from 'react-native'
import Message from '../components/Message'
import MessageInput from '../components/MessageInput';
import chatRoomData from "../dummy-data/Chats";

export default function ChatRoomScreen () {
    return (
        <View style={styles.container}>
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({item}) => <Message message={item} />}
                inverted
            />
            <MessageInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})