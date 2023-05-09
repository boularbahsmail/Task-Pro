import React, { useState, useEffect } from "react";
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
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewTask = ({ navigation }) => {
  const [userFullNameValue, setUserFullNameValue] = useState("");

  const [taskTitle, setTaskTitle] = useState("Lorem Ipsum");
  const [taskDescription, setTaskDescription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  );
  const [createdAt, setCreatedAt] = useState("");
  const [reminder, setReminder] = useState("");

  const getDateTime = () => {
    let now = new Date(),
      year = now.getFullYear(),
      month = now.getMonth() + 1,
      day = now.getDate(),
      hour = now.getHours(),
      minute = now.getMinutes();

    if (month < 10) {
      month = "0" + month;
    }

    if (day < 10) {
      day = "0" + day;
    }

    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }

    const dateFormat = `${day}/${month}/${year}`;
    setCreatedAt(dateFormat);

    const timeFormat = `${hour}:${minute}`;
    setReminder(timeFormat);
  };

  useEffect(() => {
    getDateTime();
  }, []);

  return (
    <View className="flex flex-1 relative h-screen bg-white py-4">
      <Header navigation={navigation} />
      <View className="my-4 px-4">
        <Text className="text-3xl font-bold">New task</Text>
        <Text className="text-sm text-gray-400 font-normal">
          Init and track your tasks easily
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
                  // value={taskTitle}
                  onChangeText={async (activeTaskTitle) => {
                    setTaskTitle(activeTaskTitle);
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
                  // value={taskDescription}
                  editable
                  multiline
                  onChangeText={async (activeTaskDescription) => {
                    setTaskDescription(activeTaskDescription);
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

              <View className="mb-0 flex flex-row justify-center items-start w-full">
                <View>
                  <Text className="text-gray-600 mb-3 text-sm text-left font-bold w-full">
                    Task status
                  </Text>
                  <View className="flex flex-row justify-start items-center gap-x-3 mr-4">
                    <View className="w-max">
                      <TouchableOpacity
                        className={`py-2 px-4 rounded-full border border-[#151515] bg-white flex flex-row justify-start items-center `}
                        activeOpacity={0.7}
                      >
                        <Text
                          className={`text-sm font-semibold text-[#151515]`}
                        >
                          To-Do
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View className="w-max">
                      <TouchableOpacity
                        className={`py-2 px-4 rounded-full border border-[#151515] bg-white flex flex-row justify-start items-center `}
                        activeOpacity={0.7}
                      >
                        <Text
                          className={`text-sm font-semibold text-[#151515]`}
                        >
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
                      className="rounded-full w-40 border border-gray-100 px-4 py-1 text-md text-black bg-white shadow-2xl shadow-gray-300 focus:border-gray-400"
                      placeholder={reminder}
                      autoComplete="off"
                      autoFocus={false}
                      cursorColor="gray"
                      enterKeyHint="enter"
                      // enablesReturnKeyAutomatically={true}
                      value={reminder}
                      editable
                      multiline
                      onChangeText={async (activeReminder) => {
                        setReminder(activeReminder);
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
              </View>

              {/* <View>
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
              </View> */}

              <View className="mb-6 w-32">
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

              <Text className="text-gray-600 mb-6 text-sm text-left font-bold w-full">
                Task card live preview
              </Text>
              <View className="w-full p-4 border border-[#262626] rounded-xl flex flex-col justify-center items-start gap-y-2 pt-1 bg-white border-r-2 border-b-2">
                <View className="flex flex-row justify-between items-center w-full">
                  <Text className="text-xl font-semibold">{taskTitle}</Text>
                  <TouchableOpacity activeOpacity={0.7}>
                    <EntypoIcon
                      name="dots-three-horizontal"
                      size={16}
                      color="#4b5563"
                    />
                  </TouchableOpacity>
                </View>
                <Text className="text-sm text-gray-400 font-normal mb-2">
                  {taskDescription}
                </Text>
                <View className="flex flex-row justify-between items-center w-full">
                  <View className="flex flex-row justify-start items-center">
                    <AntDesignIcon name="calendar" size={16} color="#4b5563" />
                    <Text className="ml-1 text-gray-600 text-sm">
                      {createdAt}
                    </Text>
                  </View>

                  <View className="flex flex-row justify-center items-center">
                    <View className="flex flex-row justify-start items-center mr-2 border border-gray-200 rounded-full py-1 px-3 pl-1">
                      <AntDesignIcon
                        name="clockcircleo"
                        size={15}
                        color="#4b5563"
                      />
                      <Text className="text-gray-600 text-xs ml-1">
                        {reminder}
                      </Text>
                    </View>

                    <View>
                      <Text
                        className={`py-1 px-3 text-white bg-[#151515] text-xs border border-[#151515] rounded-full font-semibold`}
                      >
                        To-Do
                      </Text>
                    </View>
                  </View>
                </View>
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
