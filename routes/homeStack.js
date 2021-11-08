import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../app/screens/Home';
import SendImages from '../app/screens/SendImages';
import Cafe from '../app/screens/LearnReact';
import Chat from '../app/screens/Chat';
import ChatRoomScreen from '../app/screens/ChatRoomScreen';

const screens = {
    Chat: {
        screen: Chat
    },
    ChatRoom: {
        screen: ChatRoomScreen
    },
    Home: {
        screen: Home
    },
    SendImages: {
        screen: SendImages
    },
    LearnReact: {
        screen: Cafe
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);