// Import libraries
import { router, useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
  TextInput,
  Switch,
  Alert,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/Firebase/Firebase";

// Create a component
const SignIn = () => {
  const navigation = useNavigation();
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const validateInputs = () => {
    if (email.trim() === "") {
      ToastAndroid.show("Validation Error", "Username or email is required", ToastAndroid.SHORT);
      return false;
    }
    if (password.trim() === "") {
      ToastAndroid.show("Validation Error", "Password is required", ToastAndroid.SHORT);
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      ToastAndroid.show(`User successfully logged in!`, ToastAndroid.SHORT);
      // router.replace('/home')
    } catch (error) {
      ToastAndroid.show(`Error: ${error.message}`, ToastAndroid.SHORT);
    }
  };
  


  return (
    <View style={{ padding: 25 }}>
      <TouchableOpacity
      onPress={()=>router.back()}
        style={{
          paddingTop: 70,
          
        }}
      >
        <Ionicons name="arrow-back-outline" size={26} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Let's Sign in your app</Text>
      <Text style={styles.subHeading}>
        Welcome to Jesha Travels. Please Sign-in Your Account
      </Text>

      <SafeAreaView style={styles.containerOne}>
       
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="EMAIL OR USERNAME"
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.rememberView}>
          <View style={styles.switch}>
            <Switch
              value={click}
              onValueChange={setClick}
              trackColor={{ true: "green", false: "gray" }}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <Pressable onPress={() => Alert.alert("Forgot Password!")}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>

        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          <Text style={styles.optionsText}>OR LOGIN WITH</Text>
        </View>

        <Text
          style={styles.footerText}
          onPress={() => router.replace("auth/sign-in/sign-up")}
        >
          Don't Have Account?<Text style={styles.signup}> Sign Up</Text>
        </Text>
      </SafeAreaView>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 30,
    marginTop: 30,
  },
  subHeading: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    marginTop: 10,
    color: 'gray'
  },
  containerOne: {
    
   
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "red",
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  rememberText: {
    fontSize: 13,
   
  },
  forgetText: {
    fontSize: 14,
    color: "red",
  },
  button: {
    backgroundColor: "red",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: "red",
    fontSize: 13,
  },
});

// Make this component available to the app
export default SignIn;
