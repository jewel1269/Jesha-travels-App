//import liraries
import { useRouter } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

// create a component
const Login = () => {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Image style={{
                 width: '100%',
       height: 400,

       marginLeft:1,
       marginRight: 10
       
            }} source={require('../assets/images/login-register.jpg')}/>
         <View>
            <Text style={{
                fontSize: 25,
                textAlign: 'center',
                fontFamily: 'outfit-medium',
                marginTop: 30
            }}>
                Jesha Travels
            </Text>
            <Text style={{
                fontSize: 16,
                textAlign: 'center',
                fontFamily: 'outfit',
                color: 'gray'
                
            }}>
                Lorem ipsum dolor, sit amet
                 consectetur adipisicing elit. 
                 At, quaerat voluptates numquam 
                 nemo, veritatis optio, tempora 
                 eum distinctio dicta  !
            </Text>

            <TouchableOpacity
            onPress={()=>router.push("auth/sign-in")}
             style={styles.button}
            >
                <Text style={{
                    textAlign: 'center',
                    fontFamily:'outfit',
                    fontSize: 20,
                    color: 'white'
                    
                }}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
        <View>
            {/* <Button>
                Get Started
            </Button> */}
        </View>
        </View>
       
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: -20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: '100%',
    },
    button:{
        padding:10,
        backgroundColor: 'green',
        borderRadius: 99,
        marginTop: '20%',
        marginRight: 10,
        marginLeft: 10
        
        

    }
});

//make this component available to the app
export default Login;
