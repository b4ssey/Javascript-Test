import React from "react";
import { Text, View } from "react-native";

import defaultStyles from "../config/styles";

function Apptext({ children, style, ...otherProps }) {
  return (
    <View style={style}>
      <Text style={[defaultStyles.text, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
}

export default Apptext;
