import React from "react";
import { View, Text, StatusBar } from "react-native";

// Components
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const NewTask = ({ navigation }) => {
  return (
    <View className="flex flex-1 relative h-screen bg-white py-4">
      <Header navigation={navigation} />
      <View className="my-4 px-4">
        <Text className="text-3xl font-bold">New task</Text>
      </View>

      <Navbar navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

export default NewTask;
