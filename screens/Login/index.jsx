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
  Platform,
} from "react-native";

// Assets
import LoginWelcome from "../../assets/images/login-welcome.png";
import AppLogo from "../../assets/app-logo-background.png";

// Icons
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [userFullNameValue, setUserFullNameValue] = useState("");
  const [userEmailValue, setUserEmailValue] = useState("");
  const [userGetStarted, setUserGetStarted] = useState("");

  const [showLogin, setShowLogin] = useState(false);

  const getData = async () => {
    try {
      const currentUserFullName = await AsyncStorage.getItem("userFullName");
      const currentUserEmail = await AsyncStorage.getItem("userEmail");
      const getStarted = await AsyncStorage.getItem("getStarted");
      setUserGetStarted(getStarted);
      if (currentUserFullName !== null && currentUserEmail !== null) {
        navigation.navigate("Tasks");
      }
    } catch (error) {
      Alert.alert("Error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View className="flex flex-1 relative h-screen bg-white">
      {showLogin || userGetStarted == "true" ? (
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

          <KeyboardAvoidingView
            enabled
            behavior={Platform.OS === "ios" ? "padding" : "position"}
            style={{ backgroundColor: "white" }}
          >
            <View className="mt-10 flex flex-col justify-center items-center pb-6 mb-10 bg-white">
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
                    placeholder="john_doe01@example.com"
                    autoComplete="email"
                    autoFocus={false}
                    cursorColor="gray"
                    enterKeyHint="enter"
                    enablesReturnKeyAutomatically={true}
                    value={userEmailValue}
                    onChangeText={async (currentUserEmail) => {
                      setUserEmailValue(currentUserEmail);
                      try {
                        await AsyncStorage.setItem(
                          "userEmail",
                          currentUserEmail
                        );
                      } catch (error) {
                        Alert.alert("Error", error);
                      }
                    }}
                  />
                </View>
                <View className="mt-1">
                  <TouchableOpacity
                    className="rounded-full py-2 px-6 bg-red-600 border border-red-500 shadow-2xl shadow-red-600 flex flex-row justify-center items-center"
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
                          setUserFullNameValue("");
                          setUserEmailValue("");
                        } else {
                          Alert.alert(
                            "Login failed",
                            "All fields are required"
                          );
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
          </KeyboardAvoidingView>
        </View>
      ) : (
        <View className="flex flex-col justify-center items-center flex-1 relative h-screen">
          <Image
            source={AppLogo}
            alt="App-Logo"
            style={{ height: 50, width: "35%" }}
          />
          <Text className="text-gray-400 font-normal">
            Stay organized and on top of your tasks.
          </Text>

          <View className="mt-6">
            <TouchableOpacity
              className="rounded-full py-2 px-6 bg-[#151515] border border-[#151515] shadow-2xl shadow-[#151515] flex flex-row justify-center items-center"
              activeOpacity={0.7}
              onPress={async () => {
                setShowLogin(true);
                try {
                  await AsyncStorage.setItem("getStarted", "true");
                } catch (error) {
                  Alert.alert("Error", error);
                }
              }}
            >
              <Text className="m-0 p-0 mr-2 text-md font-bold text-white mb-1">
                Get Started
              </Text>
              <Text className="m-0 p-0 rotate-45">
                <MaterialCommunityIconsIcon
                  name="rocket-launch-outline"
                  size={20}
                  color="white"
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* <Navbar navigation={navigation} /> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;
