import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Apptext from "./Apptext";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Apptext style={styles.text}>{label}</Apptext>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
