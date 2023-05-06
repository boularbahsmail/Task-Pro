import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

// Icons
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Assets
import defaultAvatar from "../../assets/images/default-avatar.png";

const Navbar = ({ navigation }) => {
  const route = useRoute();
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
    <View className="absolute left-0 right-0 bottom-0 m-auto px-2 py-4 flex flex-row justify-center items-center bg-white">
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("Tasks");
          }}
        >
          <View
            className={`py-2 px-4 rounded-full flex flex-row justify-center items-center bg-white shadow-2xl shadow-gray-200 border border-gray-200 ${
              route.name == "Tasks" && "bg-[#151515]"
            }`}
          >
            <FontAwesomeIcon
              name="tasks"
              size={19}
              color={route.name == "Tasks" ? "white" : "black"}
            />
            <Text
              className={`ml-2 text-md font-semibold text-[#151515] ${
                route.name == "Tasks" && "text-white"
              }`}
            >
              Tasks
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="ml-2">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <View
            className={`py-2 px-3 pl-2 rounded-full flex flex-row justify-center items-center bg-white shadow-2xl shadow-gray-200 border border-gray-200 ${
              route.name == "Profile" && "bg-[#151515]"
            }`}
          >
            <Image
              source={
                currentUserAvatar ? { uri: currentUserAvatar } : defaultAvatar
              }
              alt="User-Avatar"
              style={{ height: 22, width: 22, borderRadius: 100 }}
            />
            <Text
              className={`ml-2 text-md font-semibold text-[#151515] ${
                route.name == "Profile" && "text-white"
              }`}
            >
              {currentUserFullName}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
