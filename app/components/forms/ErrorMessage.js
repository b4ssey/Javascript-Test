import React from "react";
import Apptext from "../Apptext";
import { StyleSheet } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <Apptext style={styles.error}>{error}</Apptext>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
