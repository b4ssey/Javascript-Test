import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import ListngEditScreen from "./app/screens/ListngEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ListngEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
