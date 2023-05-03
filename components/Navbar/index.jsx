import * as React from "react";
import { Pressable, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

// Icons
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

const Navbar = ({ navigation }) => {
  const route = useRoute();
  return (
    <View className="bg-white absolute left-0 right-0 bottom-0 m-auto px-2 py-4 flex flex-row justify-center items-center">
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Tasks");
          }}
        >
          <View
            className={`py-2 px-4 rounded-md flex flex-row justify-center items-center bg-white shadow-xl shadow-gray-200 border border-gray-100 ${
              route.name == "Tasks" && "bg-[#151515]"
            }`}
          >
            <FontAwesomeIcon
              name="tasks"
              size={22}
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
        </Pressable>
      </View>
      <View className="ml-2">
        <Pressable
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <View
            className={`py-2 px-4 rounded-md flex flex-row justify-center items-center bg-white shadow-2xl shadow-gray-200 border border-gray-100 ${
              route.name == "Profile" && "bg-[#151515]"
            }`}
          >
            <FeatherIcon
              name="user"
              size={22}
              color={route.name == "Profile" ? "white" : "black"}
            />
            <Text
              className={`ml-2 text-md font-semibold text-[#151515] ${
                route.name == "Profile" && "text-white"
              }`}
            >
              Profile
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
