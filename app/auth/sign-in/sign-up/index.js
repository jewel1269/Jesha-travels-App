// Import libraries
import { useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// Create a component
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  const router = useRouter()
  const navigation = useNavigation()
  // Fade in animation
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (name.trim() === "") {
      Alert.alert("Validation Error", "Name is required");
      return false;
    }
    if (email.trim() === "") {
      Alert.alert("Validation Error", "Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      Alert.alert("Validation Error", "Enter a valid email address");
      return false;
    }
    if (phone.trim() === "") {
      Alert.alert("Validation Error", "Phone number is required");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      Alert.alert("Validation Error", "Enter a valid 10-digit phone number");
      return false;
    }
    if (username.trim() === "") {
      Alert.alert("Validation Error", "Username is required");
      return false;
    }
    if (password.trim() === "") {
      Alert.alert("Validation Error", "Password is required");
      return false;
    }
    if (password.length < 6) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 6 characters long"
      );
      return false;
    }
    return true;
  };

  const doUserRegistration = async () => {
    if (!validateInputs()) return;

    try {
      const user = new User();
      user.set("username", username);
      user.set("password", password);
      user.set("email", email);
      user.set("name", name);
      user.set("phone", phone);

      const createdUser = await user.signUp();
      Alert.alert(
        "Success!",
        `User ${createdUser.get("username")} was successfully created!`
      );
      return true;
    } catch (error) {
      Alert.alert("Error!", error.message);
      return false;
    }
  };

  return (
    <>
      <TouchableOpacity
      onPress={()=>router.back()}
       style={{
      paddingTop: 70,
      paddingLeft: 10
      }}>
        <Ionicons name="arrow-back-outline" size={26} color="black" />
      </TouchableOpacity>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 38,
            marginTop: -20,
            marginLeft: -24,
            marginBottom: 20,
          }}
        >
          Welcome Jesha Teavels
        </Text>
        <Text
          style={{
            textAlign: "start",
            marginLeft: -30,
            fontFamily: "outfit-medium",
            fontSize: 28,
            marginTop: -20,
          }}
        >
          Create a new account and fill up this from
        </Text>
        <Text style={styles.headerText}>Sign Up</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, styles.inputLeft]}
            value={name}
            placeholder="Name"
            onChangeText={setName}
          />
          <TextInput
            style={[styles.input, styles.inputRight]}
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, styles.inputLeft]}
            value={phone}
            placeholder="Phone Number"
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={[styles.input, styles.inputRight]}
            value={username}
            placeholder="Username"
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={doUserRegistration}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              marginTop: 5,
            }}
          >
            If you have Account then{" "}
            <Text
              onPress={() => router.replace("auth/sign-in")}
              style={{
                color: "red",
                textDecorationLine: "underline",
              }}
            >
              Log-In
            </Text>
          </Text>
        </View>
      </Animated.View>
    </>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    marginTop:90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    marginBottom: 20,
    
    color: "#333",
    fontFamily:'outfit-bold'
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 8,
  },
  inputLeft: {
    marginRight: 10,
    flex: 1,
  },
  inputRight: {
    marginLeft: 10,
    flex: 1,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily:'outfit-bold'
  },
});

// Make this component available to the app
export default SignUp;
