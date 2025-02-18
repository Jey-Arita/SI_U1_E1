import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';


import { View } from 'react-native';
const _layout = () => {

  return (
    <View>
      <Slot />

      <StatusBar style='light' />
    </View>
  )
}

export default _layout