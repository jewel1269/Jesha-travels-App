//import liraries
import Login from '@/components/Login';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth } from './../configs/Firebase/Firebase';
import { Redirect } from 'expo-router';

// create a component
const MyComponent = () => {
    const user = auth.currentUser;
    return (
        <View style={{
            flex:1
        }}>
            {user ? <Redirect href={'/mytrip'}/> :  <Login/>}
     
        </View>
    );
};


export default MyComponent;
