import * as React from "react";
import { Pressable, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

// Icons
import Icon from "react-native-vector-icons/FontAwesome";

const Navbar = ({ navigation }) => {
  const route = useRoute();
  return (
    <View className="absolute left-3 right-3 bottom-3 m-auto rounded-full px-2 py-2 flex flex-row justify-between items-center bg-black">
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text
            className={`text-md font-bold p-3 rounded-full ${
              route.name == "Home" ? "text-black bg-white" : "text-white"
            }`}
          >
            <Icon
              name="home"
              size={25}
              // color={route.name == "Home" ? "#CB3837" : "#FFFFFF"}
            />
          </Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("About");
          }}
        >
          <Text
            className={`text-md font-bold py-3 px-4 rounded-full ${
              route.name == "About" ? "text-black bg-white" : "text-white"
            }`}
          >
            <Icon
              name="user"
              size={25}
              // color={route.name == "About" ? "#CB3837" : "#FFFFFF"}
            />
          </Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Contact");
          }}
        >
          <Text
            className={`text-md font-bold py-3 px-4 rounded-full ${
              route.name == "Contact" ? "text-black bg-white" : "text-white"
            }`}
          >
            <Icon
              name="phone"
              size={25}
              // color={route.name == "Contact" ? "#CB3837" : "#FFFFFF"}
            />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
