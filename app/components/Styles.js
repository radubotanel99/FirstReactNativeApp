import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    newMessageContainer: {
        backgroundColor: 'red',
        height: 18,
        width: 18,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 15,
        left: 50
    },
    newMessageNumber: {
        color: 'white',
        fontSize: 13,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    row : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: 'gray',
    },
    image: {
        height: 55,
        width: 55,
        borderRadius: 30,
        marginRight: 10,
    }
})

export default styles;