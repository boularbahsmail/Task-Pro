import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';

// Components
import Navbar from "../../components/Navbar";

const Home = ({ navigation }) => {
    return (
        <View className="flex flex-1 relative h-screen">
            {/* <Text className="font-bold text-3xl">Home</Text> */}
            <Navbar navigation={navigation} />
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;
