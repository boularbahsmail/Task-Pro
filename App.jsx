import * as React from "react";

// React Native Navigation System
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Screens
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About Page" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Contact Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
