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
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// Create a component
const SignIn = () => {
  const navigation = useNavigation();
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const validateInputs = () => {
    if (username.trim() === "") {
      Alert.alert("Validation Error", "Username or email is required");
      return false;
    }
    if (password.trim() === "") {
      Alert.alert("Validation Error", "Password is required");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      // Perform login logic here
      Alert.alert(
        "Login Successful!",
        "See you on my Instagram if you have questions: must_ait6"
      );
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
        <Image
          style={styles.image}
          source={
            "../../../assets/images/login-button-3d-icon-download-in-png-blend-fbx-gltf-file-formats--log-access-interface-pack-crime-security-icons-6559365.webp"
          }
          resizeMode="contain"
        />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="EMAIL OR USERNAME"
            value={username}
            onChangeText={setUsername}
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
    marginTop: 60,
  },
  subHeading: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    marginTop: 10,
    color: 'gray'
  },
  containerOne: {
    alignItems: "center",
    marginTop: -60
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
