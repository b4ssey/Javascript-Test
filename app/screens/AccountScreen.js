import React from "react";
import Screen from "../components/Screen";
import Item from "../components/list/Item";
import { FlatList, StyleSheet, View } from "react-native";
import defaultStyles from "../config/styles";
import Icon from "../components/Icon";
import ItemSeperator from "../components/list/ItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: defaultStyles.colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: defaultStyles.colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Item
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ItemSeperator}
        />
      </View>
      <Item
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: { backgroundColor: defaultStyles.colors.light },
});

export default AccountScreen;
