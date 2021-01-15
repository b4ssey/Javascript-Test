import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 2.5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
