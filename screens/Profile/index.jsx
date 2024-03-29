import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";

// Components
import Navbar from "../../components/Navbar";

// Assets
import defaultAvatar from "../../assets/images/default-avatar.png";

// Icons
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as ImagePicker from "expo-image-picker";
import Header from "../../components/Header";

const Profile = ({ navigation }) => {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [image, setImage] = useState(null);

  const checkForCameraRollPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert(
        "Please grant camera roll permissions inside your system's settings"
      );
    } else {
      console.log("Media Permissions are granted");
    }
  };

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!_image.assets[0].cancelled) {
      setImage(_image.assets[0].uri);
      try {
        await AsyncStorage.setItem("userAvatar", _image.assets[0].uri);
      } catch (error) {
        Alert.alert("Error", error);
      }
    }
  };

  const getData = async () => {
    try {
      const currentUserFullName = await AsyncStorage.getItem("userFullName");
      const currentUserEmail = await AsyncStorage.getItem("userEmail");
      const currentUserAvatar = await AsyncStorage.getItem("userAvatar");
      if (currentUserFullName !== null && currentUserEmail !== null) {
        setUserFullName(currentUserFullName);
        setUserEmail(currentUserEmail);
        setImage(currentUserAvatar);
      }
    } catch (error) {
      Alert.alert("Error", error);
    }
  };

  const logOut = async () => {
    navigation.navigate("Login");
    await AsyncStorage.removeItem("userFullName");
    await AsyncStorage.removeItem("userEmail");
    await AsyncStorage.removeItem("userAvatar");
  };

  useEffect(() => {
    getData();
    // checkForCameraRollPermission();
  }, []);

  return (
    <View className="flex flex-1 relative h-screen bg-white py-4">
      <Header navigation={navigation} />
      <View className="py-4 px-6 pt-8">
        <View
          className="relative flex justify-center items-center mx-auto rounded-full shadow-2xl shadow-gray-900"
          style={{ height: 130, width: 130 }}
        >
          <View className="rounded-full overflow-hidden border border-gray-300 p-1 bg-gray-100">
            {image ? (
              <Image
                source={{ uri: image }}
                alt="User-Avatar"
                style={{ height: 150, width: 150, borderRadius: 300 }}
              />
            ) : (
              <Image
                source={defaultAvatar}
                alt="User-Avatar"
                style={{ height: 150, width: 150, borderRadius: 300 }}
              />
            )}
          </View>
          <View className="absolute -right-4 bottom-2">
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-red-600 border border-red-700 w-10 h-10 rounded-full shadow-2xl shadow-red-600 flex justify-center items-center"
              onPress={addImage}
            >
              <MaterialCommunityIconsIcon
                name="camera"
                size={18}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-col justify-center items-center gap-y-2 py-4 mt-2">
          <View className="flex flex-row justify-center items-center">
            <Text className="text-4xl font-black text-black text-center mr-1">
              {userFullName}
            </Text>
            <TouchableOpacity activeOpacity={0.7} className="mt-1 py-2 px-1 flex justify-center items-center">
              <FontAwesomeIcon name="edit" size={16} color="gray" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-center items-center">
            <Text className="ml-1 text-xs text-gray-500 bg-gray-50 border border-gray-100 py-1 px-1.5 rounded-md text-center">
              {userEmail}
            </Text>
          </View>
          <View className="pt-2 w-42">
            <TouchableOpacity
              activeOpacity={0.7}
              className="rounded-full py-2 px-4 bg-red-600 border border-red-600 shadow-2xl shadow-red-600 flex flex-row justify-center items-center"
              onPress={logOut}
            >
              <AntDesignIcon name="logout" size={14} color="white" />
              <Text className="text-white font-bold text-md ml-2">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-lg font-semibold text-[#262626] text-left">
            Tasks Statistics
          </Text>
        </View>

        <View>
          <Text>...</Text>
        </View>
      </View>
      <Navbar navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Profile;
