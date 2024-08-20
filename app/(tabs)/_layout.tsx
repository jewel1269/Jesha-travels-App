//import liraries
import { Tabs } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const TabLayout = () => {
    return (
        <View>
            <Tabs.Screen name='mytrip'/>
             <Tabs.Screen name='discover'/>
              <Tabs.Screen name='profile'/>
        </View>
    );
};


export default TabLayout;
