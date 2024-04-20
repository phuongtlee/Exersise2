import React, { useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { Platform } from "react-native";

const AppbarCustom = ({ navigation, route, options, back }) => {
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const {disabled} = false
  const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon={MORE_ICON} onPress={openMenu} />}
        >
          <Menu.Item
            onPress={() => {
              console.log("Home has pressed!");
            }}
            title="Home"
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("Profile");
            }}
            title="Profile"
          />
          <Menu.Item
            onPress={() => {
              console.log("Options 3 has pressed!");
            }}
            title="options 3"
            disabled
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};
export default AppbarCustom;
