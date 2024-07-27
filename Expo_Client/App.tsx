import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./src/Home/Todo";
import Router from "./Router";

export default function App() {
  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}
