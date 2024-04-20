import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../TabNavTutorial/Home";
import Profile from "../TabNavTutorial/Profile";
import { Icon } from "react-native-paper";

export default function TabNav() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon source="home" color="#000" size={26} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <Icon source="account" color="#000" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}
