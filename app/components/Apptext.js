import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

function Apptext({ children, style }) {
  return (
    <View style={style}>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Aveiro",
  },
});

export default Apptext;
