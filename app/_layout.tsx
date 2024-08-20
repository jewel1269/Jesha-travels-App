//import liraries
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const RootLayout = () => {

  useFonts({
    'outfit' :require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium' :require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold' :require('../assets/fonts/Outfit-Bold.ttf'),
 
  })
  
  return (
<Stack>
  {/* <Stack screenOptions={{
  headerShown:false
}}>
  <Stack.Screen name='index' />
</Stack> */}
<Stack.Screen name="(tabs)"/>
</Stack>
  );
};


export default RootLayout;

