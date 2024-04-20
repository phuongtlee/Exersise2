import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../DrawerNavTutorial/Home";
import Profile from "../DrawerNavTutorial/Profile";
import DrawerNavPaperCustom from "./DrawerNavPaperCustom";

export default function DrawerNav() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerNavPaperCustom {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
