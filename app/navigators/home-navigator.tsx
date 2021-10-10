import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, ViewPostScreen } from "../screens";

type PrimaryParamList = {
  Home: undefined;
  ViewPost: { postId: string };
};

const Stack = createStackNavigator<PrimaryParamList>();

export function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ViewPost" component={ViewPostScreen} />
    </Stack.Navigator>
  );
}
