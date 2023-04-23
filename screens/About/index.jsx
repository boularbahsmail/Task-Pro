import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// Components
import Navbar from "../../components/Navbar";

const About = ({ navigation }) => {
    return (
        <View className="flex flex-1 relative h-screen">
            {/* <Text className="font-bold text-3xl">About</Text> */}
            <Navbar navigation={navigation} />
            <StatusBar style="auto" />
        </View>
    );
}

export default About;
