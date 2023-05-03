import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// Components
import Navbar from "../../components/Navbar";

const Tasks = ({ navigation }) => {
  return (
    <View className="flex flex-1 relative h-screen bg-white">
      <View className="p-4">
        <Text className="font-bold text-3xl">Tasks</Text>
      </View>
      <Navbar navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Tasks;
