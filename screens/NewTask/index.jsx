import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

// Components
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

// Icons
import IoniconsIcon from "react-native-vector-icons/Ionicons";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewTask = ({ navigation }) => {
  const [userFullNameValue, setUserFullNameValue] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [reminder, setReminder] = useState("00:00");

  const getDate = () => {
    const now = new Date(),
      year = now.getFullYear(),
      month = now.getMonth(),
      day = now.getDay();

    const dateFormat = `${year} - ${month} - ${day}`;
    setCreatedAt(dateFormat);
  };

  return (
    <View className="flex flex-1 relative h-screen bg-white py-4">
      <Header navigation={navigation} />
      <View className="my-4 px-4">
        <Text className="text-3xl font-bold">New task</Text>
        <Text className="text-sm text-gray-400 font-normal">
          Init and track tasks easily
        </Text>

        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === "ios" ? "padding" : "position"}
          style={{ backgroundColor: "white" }}
        >
          <View className="mt-6 flex flex-col justify-center items-center pb-6 mb-10 bg-white">
            <Text className="text-gray-600 mb-3 text-sm text-left w-full font-bold">
              Task title
            </Text>
            <View className="w-full">
              <View className="mb-6">
                <TextInput
                  className="rounded-md h-11 w-full border border-gray-100 px-4 text-black bg-white shadow-2xl shadow-gray-300 focus:border-gray-400"
                  placeholder="..."
                  autoComplete="off"
                  autoFocus={false}
                  cursorColor="gray"
                  enterKeyHint="enter"
                  enablesReturnKeyAutomatically={true}
                  value={userFullNameValue}
                  onChangeText={async (currentUserName) => {
                    setUserFullNameValue(currentUserName);
                    // try {
                    //   await AsyncStorage.setItem(
                    //     "userFullName",
                    //     currentUserName
                    //   );
                    // } catch (error) {
                    //   Alert.alert("Error", error);
                    // }
                  }}
                />
              </View>

              <Text className="text-gray-600 mb-3 text-sm text-left w-full font-bold">
                Task description
              </Text>
              <View className="mb-6">
                <TextInput
                  className="rounded-md w-full border border-gray-100 px-4 h-20 text-black bg-white shadow-2xl shadow-gray-300 focus:border-gray-400"
                  placeholder="..."
                  autoComplete="off"
                  autoFocus={false}
                  cursorColor="gray"
                  enterKeyHint="enter"
                  // enablesReturnKeyAutomatically={true}
                  // value={userFullNameValue}
                  editable
                  multiline
                  onChangeText={async (currentUserName) => {
                    // setUserFullNameValue(currentUserName);
                    // try {
                    //   await AsyncStorage.setItem(
                    //     "userFullName",
                    //     currentUserName
                    //   );
                    // } catch (error) {
                    //   Alert.alert("Error", error);
                    // }
                  }}
                />
              </View>

              <Text className="text-gray-600 mb-3 text-sm text-left w-full font-bold">
                Task status
              </Text>
              <View className="mb-6">
                <View className="flex flex-row justify-start items-center gap-x-3">
                  <View className="w-max">
                    <TouchableOpacity
                      className={`py-2 px-4 rounded-full border border-[#151515] bg-white flex flex-row justify-start items-center `}
                      activeOpacity={0.7}
                    >
                      <Text className={`text-sm font-semibold text-[#151515]`}>
                        To-Do
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View className="w-max">
                    <TouchableOpacity
                      className={`py-2 px-4 rounded-full border border-[#151515] bg-white flex flex-row justify-start items-center `}
                      activeOpacity={0.7}
                    >
                      <Text className={`text-sm font-semibold text-[#151515]`}>
                        In Progress
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* <View className="w-max">
                    <TouchableOpacity
                      className={`py-2 px-4 rounded-full border border-[#151515] bg-white flex flex-row justify-start items-center `}
                      activeOpacity={0.7}
                    >
                      <Text className={`text-sm font-semibold text-[#151515]`}>
                        Complete
                      </Text>
                    </TouchableOpacity>
                  </View> */}
                </View>
              </View>

              <View>
                <Text className="text-gray-600 mb-3 text-sm text-left w-full font-bold">
                  Task reminder
                </Text>
                <View className="mb-6">
                  <TextInput
                    className="rounded-md w-full border border-gray-100 px-4 py-2 text-black bg-white shadow-2xl shadow-gray-300 focus:border-gray-400"
                    placeholder="10:32"
                    autoComplete="off"
                    autoFocus={false}
                    cursorColor="gray"
                    enterKeyHint="enter"
                    // enablesReturnKeyAutomatically={true}
                    // value={userFullNameValue}
                    editable
                    multiline
                    keyboardType="numeric"
                    onChangeText={async (currentUserName) => {
                      // setUserFullNameValue(currentUserName);
                      // try {
                      //   await AsyncStorage.setItem(
                      //     "userFullName",
                      //     currentUserName
                      //   );
                      // } catch (error) {
                      //   Alert.alert("Error", error);
                      // }
                    }}
                  />
                </View>
              </View>

              <View className="mt-4 w-32">
                <TouchableOpacity
                  className="rounded-full py-2 px-6 bg-red-600 border border-red-500 flex flex-row justify-center items-center"
                  activeOpacity={0.7}
                  onPress={async () => {
                    // try {
                    //   const currentUserFullName = await AsyncStorage.getItem(
                    //     "userFullName"
                    //   );
                    //   const currentUserEmail = await AsyncStorage.getItem(
                    //     "userEmail"
                    //   );
                    //   if (
                    //     currentUserFullName !== null &&
                    //     currentUserEmail !== null
                    //   ) {
                    //     navigation.navigate("Profile");
                    //     setUserFullNameValue("");
                    //     setUserEmailValue("");
                    //   } else {
                    //     Alert.alert("Login failed", "All fields are required");
                    //   }
                    // } catch (error) {
                    //   Alert.alert("Error", error);
                    // }
                  }}
                >
                  <Text className="m-0 p-0 mr-1 text-md font-bold text-white mb-1">
                    Create
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

      <Navbar navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

export default NewTask;
