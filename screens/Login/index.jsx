import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

// Assets
import LoginWelcome from "../../assets/images/login-welcome.png";

// Icons
import IoniconsIcon from "react-native-vector-icons/Ionicons";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [userFullNameValue, setUserFullNameValue] = useState("");
  const [userEmailValue, setUserEmailValue] = useState("");

  const getData = async () => {
    try {
      const currentUserFullName = await AsyncStorage.getItem("userFullName");
      const currentUserEmail = await AsyncStorage.getItem("userEmail");
      if (currentUserFullName !== null && currentUserEmail !== null) {
        navigation.navigate("Profile");
      }
    } catch (error) {
      Alert.alert("Error", error);
    }
  };

  useEffect(() => {
    setUserFullNameValue("");
    setUserEmailValue("");
    getData();
  }, []);

  return (
    <KeyboardAvoidingView
      enabled={true}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View className="flex flex-1 relative h-screen bg-white">
        <View className="p-4 flex flex-col justify-center items-center h-screen">
          <View className="flex justify-center items-center w-full mb-2 mt-8">
            <Image
              source={LoginWelcome}
              alt="Welcome-Login-Image"
              style={{ height: 200, width: "100%" }}
            />
          </View>

          <View className="flex flex-col justify-center items-center w-full mt-6">
            <Text className="font-medium text-md text-center">
              Hello and welcome to
            </Text>
            <Text className="font-black text-4xl text-center uppercase my-2 text-red-600">
              task pro
            </Text>
            <Text className="mt-4 text-center text-gray-600 leading-6 w-80 font-normal">
              A simple & easy-to-use todo-list app designed to help you stay
              organized and on top of your tasks. With a user-friendly interface
              and a range of features, Task Pro allows you to create and manage
              multiple to-do lists, set reminders, and prioritize tasks.
            </Text>
          </View>

          <View className="mt-10 flex flex-col justify-center items-center mb-16">
            <Text className="text-gray-600 mb-3 text-sm text-left w-80 px-2 font-bold">
              Full name
            </Text>
            <View>
              <View className="w-full mb-4">
                <TextInput
                  className="rounded-md h-11 w-80 border border-gray-100 px-4 text-black bg-white shadow-2xl shadow-gray-300 focus:border-gray-400"
                  placeholder="John Doe"
                  autoComplete="off"
                  autoFocus={false}
                  cursorColor="gray"
                  enterKeyHint="enter"
                  enablesReturnKeyAutomatically={true}
                  value={userFullNameValue}
                  onChangeText={async (currentUserName) => {
                    setUserFullNameValue(currentUserName);
                    try {
                      await AsyncStorage.setItem(
                        "userFullName",
                        currentUserName
                      );
                    } catch (error) {
                      Alert.alert("Error", error);
                    }
                  }}
                />
              </View>

              <Text className="text-gray-600 mb-3 text-sm text-left w-80 px-2 font-bold">
                Email
              </Text>
              <View className="w-full mb-4">
                <TextInput
                  className="rounded-md h-11 w-80 border border-gray-100 px-4 text-black bg-white shadow-2xl shadow-gray-300 focus:border-gray-400"
                  placeholder="Doe_John01@example.com"
                  autoComplete="email"
                  autoFocus={false}
                  cursorColor="gray"
                  enterKeyHint="enter"
                  enablesReturnKeyAutomatically={true}
                  value={userEmailValue}
                  onChangeText={async (currentUserEmail) => {
                    setUserEmailValue(currentUserEmail);
                    try {
                      await AsyncStorage.setItem("userEmail", currentUserEmail);
                    } catch (error) {
                      Alert.alert("Error", error);
                    }
                  }}
                />
              </View>
              <View className="mt-1">
                <TouchableOpacity
                  className="rounded-md py-2.5 px-6 bg-red-600 border border-red-500 shadow-2xl shadow-red-600 flex flex-row justify-center items-center"
                  activeOpacity={0.7}
                  onPress={async () => {
                    try {
                      const currentUserFullName = await AsyncStorage.getItem(
                        "userFullName"
                      );
                      const currentUserEmail = await AsyncStorage.getItem(
                        "userEmail"
                      );
                      if (
                        currentUserFullName !== null &&
                        currentUserEmail !== null
                      ) {
                        navigation.navigate("Profile");
                      } else {
                        Alert.alert("Login failed", "All fields are required");
                      }
                    } catch (error) {
                      Alert.alert("Error", error);
                    }
                  }}
                >
                  <Text className="m-0 p-0 mr-1 text-md font-bold text-white mb-1">
                    Continue
                  </Text>
                  <Text className="m-0 p-0 rotate-90">
                    <IoniconsIcon
                      name="ios-arrow-up-circle-outline"
                      size={20}
                      color="white"
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* <Navbar navigation={navigation} /> */}
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;