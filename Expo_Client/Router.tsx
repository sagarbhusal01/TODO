import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Todo from "./src/Home/Todo";
import Setting from "./src/Setting/Setting";
import { BACKGROUND, WHITE } from "./Global/CONSTANTS";
export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Todo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            headerTransparent: true,
            headerTitle: "Setting",
            headerTitleAlign: "center",
            headerTintColor: WHITE,
            animation: "slide_from_right",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
