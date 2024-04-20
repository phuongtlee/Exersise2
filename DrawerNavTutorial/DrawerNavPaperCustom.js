import React, { useState } from "react";
import { Drawer } from "react-native-paper";

export default function DrawerNavPaperCustom({ navigation }) {
  return (
    <Drawer.Section style={{ paddingTop: 40 }}>
      <Drawer.Item
        label="Home"
        icon="home"
        onPress={() => navigation.navigate("Home")}
      />

      <Drawer.Item
        label="Profile"
        icon="account"
        onPress={() => navigation.navigate("Profile")}
      />
    </Drawer.Section>
  );
}
