import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

// Assets
import appLogo from "../../assets/app-logo.png";

// Icons
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const Header = ({ navigation }) => {
  return (
    <View className="flex flex-row justify-between items-center px-4">
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate("Tasks");
        }}
        className="flex flex-row justify-start items-center"
      >
        {/* <FontAwesomeIcon name="tasks" size={22} color="#dc2626" /> */}
        <Image
          source={appLogo}
          alt="App-Icon"
          style={{ height: 20, width: 90, borderRadius: 100 }}
        />
        {/* <Text className="font-bold text-lg ml-1">TaskPro</Text> */}
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          className="flex flex-row justify-center items-center py-1.5 px-4 pl-3 rounded-full border border-red-600 shadow-2xl shadow-gray-100 bg-white"
          activeOpacity={0.5}
        >
          <AntDesignIcon name="pluscircle" size={16} color="#dc2626" />
          <Text className="text-red-600 font-semibold text-sm ml-1.5">New</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
