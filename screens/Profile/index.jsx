import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";

// Components
import Navbar from "../../components/Navbar";

// Assets
import avatar from "../../assets/images/user-avatar.png";

// Icons
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FontistoIcon from "react-native-vector-icons/Fontisto";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const currentUserFullName = await AsyncStorage.getItem("userFullName");
        const currentUserEmail = await AsyncStorage.getItem("userEmail");
        if (currentUserFullName !== null && currentUserEmail !== null) {
          setUserFullName(currentUserFullName);
          setUserEmail(currentUserEmail);
        }
      } catch (error) {
        Alert.alert("Error", error);
      }
    };
    getData();
  }, []);

  return (
    <View className="flex flex-1 relative h-screen bg-white">
      <View className="py-4 px-6 pt-10">
        <View
          className="border border-gray-600 flex justify-center items-center mx-auto overflow-hidden rounded-full shadow-2xl shadow-[#262626]"
          style={{ height: 120, width: 120 }}
        >
          <Image
            source={avatar}
            alt="User-Avatar"
            style={{ height: 120, width: 120 }}
          />
        </View>
        <View className="flex flex-col justify-center items-center gap-y-2 py-4 pt-6">
          <Text className="text-4xl font-black text-black text-center">
            {userFullName}
          </Text>
          <View className="flex flex-row justify-center items-center">
            <Text className="bg-gray-50 border border-gray-100 py-1 px-1.5 rounded-md text-center">
              <FontistoIcon name="email" size={14} color="gray" />
            </Text>
            <Text className="ml-1 text-xs text-gray-500 bg-gray-50 border border-gray-100 py-1 px-3 rounded-md text-center">
              {userEmail}
            </Text>
          </View>
          <View className="pt-2 w-42">
            <TouchableOpacity
              activeOpacity={0.7}
              className="rounded-md py-2 px-4 bg-red-600 border border-red-600 shadow-2xl shadow-red-600 flex flex-row justify-center items-center"
              onPress={async () => {
                navigation.navigate("Login");
                await AsyncStorage.removeItem("userFullName");
              }}
            >
              <AntDesignIcon name="logout" size={14} color="white" />
              <Text className="text-white font-bold text-md ml-2">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Navbar navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Profile;
