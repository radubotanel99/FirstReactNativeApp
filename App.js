import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import logo from './assets/logo.png';
// import * as ImagePicker from 'expo-image-picker';
// import * as Sharing from 'expo-sharing';
import * as SplashScreen from 'expo-splash-screen';
import SendImages from './app/screens/SendImages';
import Navigator from './routes/homeStack';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 1000);

export default function App() {
  return (
    <Navigator />
  );
}
