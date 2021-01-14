import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import defaultStyles from "../config/styles";
import Apptext from "./Apptext";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={defaultStyles.colors.light}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <Apptext style={styles.title}>{title}</Apptext>
            {subTitle && <Apptext style={styles.subTitle}>{subTitle}</Apptext>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: defaultStyles.colors.medium,
    fontSize: 14,
  },
  title: {
    fontWeight: "500",
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default ListItem;
