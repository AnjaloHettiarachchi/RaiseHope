import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SignInWithEmailScreen,
  SignUpWithEmailScreen,
  WelcomeScreen,
} from "../screens";

type PrimaryParamList = {
  Welcome: undefined;
  SignInWithEmail: undefined;
  SignUpWithEmail: undefined;
};

const Stack = createStackNavigator<PrimaryParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignInWithEmail" component={SignInWithEmailScreen} />
      <Stack.Screen name="SignUpWithEmail" component={SignUpWithEmailScreen} />
    </Stack.Navigator>
  );
}
