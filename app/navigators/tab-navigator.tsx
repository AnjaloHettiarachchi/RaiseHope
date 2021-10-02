import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../screens";

type PrimaryParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
};

const Tab = createMaterialBottomTabNavigator<PrimaryParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{ tabBarIcon: "home", tabBarLabel: "Home" }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: "bell",
          tabBarLabel: "Notifications",
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: "account-circle",
          tabBarLabel: "Profile",
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
