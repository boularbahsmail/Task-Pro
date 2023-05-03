import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

// Components
import Navbar from "../../components/Navbar";

// Assets
import LoginWelcome from "../../assets/images/login-welcome.png";

// Icons
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState();

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
              style={{ height: 250, width: "100%" }}
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
            <Text className="text-gray-400 mb-3 text-sm text-left w-80 px-2 font-normal">
              What shoud we call you?
            </Text>
            <View>
              <View className="w-full mb-4">
                <TextInput
                  className="rounded-md h-10 w-80 border border-gray-100 px-4 text-black bg-white shadow-2xl shadow-gray-300 focus:border-gray-400"
                  placeholder="Ismail Boularbah"
                  autoComplete="off"
                  autoFocus={false}
                  cursorColor="gray"
                  enterKeyHint="enter"
                  onChangeText={(currentUserName) =>
                    setUserInfo({
                      ...userInfo,
                      userName: currentUserName,
                    })
                  }
                />
              </View>
              <View>
                <TouchableOpacity
                  className="rounded-md py-1.5 px-6 bg-red-600 border border-red-500 shadow-2xl shadow-red-600 flex flex-row justify-center items-center"
                  activeOpacity={0.7}
                  onPress={() => {
                    userInfo?.userName && alert(userInfo?.userName);
                  }}
                >
                  <Text className="m-0 p-0 mr-1 text-md font-bold text-white">
                    Continue
                  </Text>
                  <Text className="m-0 p-0 rotate-90 mt-1.5">
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
