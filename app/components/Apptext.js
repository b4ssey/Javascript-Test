import React from "react";
import { Text, View } from "react-native";

import defaultStyles from "../config/styles";

function Apptext({ children, style }) {
  return (
    <View style={style}>
      <Text style={[defaultStyles.text, style]}>{children}</Text>
    </View>
  );
}

export default Apptext;
