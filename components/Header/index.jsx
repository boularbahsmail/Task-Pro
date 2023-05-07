import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

// Assets
import appLogo from "../../assets/app-logo.png";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Assets
import defaultAvatar from "../../assets/images/default-avatar.png";

const Header = ({ navigation }) => {
  const [currentUserFullName, setCurrentUserFullName] = useState("");
  const [currentUserAvatar, setCurrentUserAvatar] = useState(null);

  const getData = async () => {
    try {
      const currentUserFullName = await AsyncStorage.getItem("userFullName");
      const currentUserAvatar = await AsyncStorage.getItem("userAvatar");
      if (currentUserFullName !== null) {
        setCurrentUserFullName(currentUserFullName);
        setCurrentUserAvatar(currentUserAvatar);
      }
    } catch (error) {
      Alert.alert("Error", error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <View className="flex flex-row justify-between items-center px-4">
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate("Tasks");
        }}
        className="flex flex-row justify-start items-center"
      >
        <Image
          source={appLogo}
          alt="App-Icon"
          style={{ height: 20, width: 90, borderRadius: 100 }}
        />
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <View
            className={`p-1 rounded-xl flex flex-row justify-center items-center bg-white shadow-2xl shadow-gray-200 border border-gray-200`}
          >
            <Image
              source={
                currentUserAvatar ? { uri: currentUserAvatar } : defaultAvatar
              }
              alt="User-Avatar"
              style={{ height: 40, width: 40, borderRadius: 10 }}
            />
            {/* <Text
              className={`ml-2 text-md font-semibold text-[#151515]`}
            >
              {currentUserFullName}
            </Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
