import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Apptext from "./Apptext";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Apptext style={styles.text}>{item.label}</Apptext>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
