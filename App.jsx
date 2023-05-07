import * as React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

// React Native Navigation System
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Screens
import Login from "./screens/Login";
import Tasks from "./screens/Tasks";
import Profile from "./screens/Profile";
import NewTask from "./screens/NewTask";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationTypeForReplace: "push",
            animation: "none",
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tasks" component={Tasks} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="New" component={NewTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginBottom: 0,
  },
});
