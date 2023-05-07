import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

// Icons
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const Navbar = ({ navigation }) => {
  const route = useRoute();

  return (
    <View className="absolute left-0 right-0 bottom-0 m-auto px-2 py-3 flex flex-row justify-center items-center bg-white">
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
            navigation.navigate("New");
          }}
        >
          <View
            className={`py-2 px-4 pl-3 rounded-full flex flex-row justify-center items-center bg-white shadow-2xl shadow-gray-200 border border-gray-200 ${
              route.name == "New" && "bg-[#151515]"
            }`}
          >
            <AntDesignIcon
              name="pluscircle"
              size={19}
              color={route.name == "New" ? "white" : "black"}
            />
            <Text
              className={`ml-2 text-md font-semibold text-[#151515] ${
                route.name == "New" && "text-white"
              }`}
            >
              New
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
