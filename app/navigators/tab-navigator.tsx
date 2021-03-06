import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { CreatePostScreen, HomeScreen, ProfileScreen } from "../screens";
import { useTheme } from "@emotion/react";
import { HomeNavigator } from "./home-navigator";

type PrimaryParamList = {
  HomeStack: undefined;
  Search: undefined;
  Create: undefined;
  Notifications: undefined;
  Profile: undefined;
};

const Tab = createMaterialBottomTabNavigator<PrimaryParamList>();

const TabNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{ tabBarColor: theme.primary as string }}
      initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        options={{ tabBarIcon: "heart", tabBarLabel: "Hopes" }}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: "magnify",
          tabBarLabel: "Search",
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Create"
        options={{
          tabBarColor: theme.palette.amber[700].toString(),
          tabBarIcon: "heart-plus",
          tabBarLabel: "Create Hope",
        }}
        component={CreatePostScreen}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: "bell",
          tabBarLabel: "Notifications",
          tabBarBadge: 5,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: "account-circle",
          tabBarLabel: "Profile",
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
