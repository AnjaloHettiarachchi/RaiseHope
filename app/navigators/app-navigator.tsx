import React from "react";
import { ProfileInitialScreen } from "../screens";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tab-navigator";

export type PrimaryParamList = {
  ProfileInitialScreen: undefined;
  MainTabStack: undefined;
};

const Stack = createStackNavigator<PrimaryParamList>();

function _AppNavigator(props: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {typeof props.profile.firstName === "undefined" ? (
        <Stack.Screen
          name="ProfileInitialScreen"
          component={ProfileInitialScreen}
        />
      ) : (
        <Stack.Screen name="MainTabStack" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
}

const mapStateToProps = (state: any) => ({
  profile: state.profile,
});

export const AppNavigator = connect(mapStateToProps)(_AppNavigator);
