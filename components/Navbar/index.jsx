import * as React from "react";
import { Pressable, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

// Icons
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

const Navbar = ({ navigation }) => {
  const route = useRoute();
  return (
    <View className="absolute left-3 right-3 bottom-3 m-auto px-2 py-2 flex flex-row justify-center gap-x-6 items-center">
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <View
            className={`py-2 px-4 rounded-full flex flex-row justify-center items-center bg-white shadow-xl shadow-gray-200 border border-gray-100 ${
              route.name == "Dashboard" && "bg-[#151515]"
            }`}
          >
            <MaterialCommunityIconsIcon
              name="view-dashboard-variant-outline"
              size={22}
              color={route.name == "Dashboard" ? "white" : "black"}
            />
            <Text
              className={`ml-2 text-md font-semibold text-[#151515] ${
                route.name == "Dashboard" && "text-white"
              }`}
            >
              Dashboard
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <View
            className={`py-2 px-4 rounded-full flex flex-row justify-center items-center bg-white shadow-2xl shadow-gray-200 border border-gray-100 ${
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
