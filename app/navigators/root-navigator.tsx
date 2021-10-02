import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppNavigator } from "./app-navigator";
import { AuthNavigator } from "./auth-navigator";
import { connect } from "react-redux";

export type RootParamList = {
  AppStack: undefined;
  AuthStack: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = (props: any) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {props.isSignedIn ? (
        <Stack.Screen name="AppStack" component={AppNavigator} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state: any) => ({
  isSignedIn: state.auth.user,
});

const ConnectedRootStack = connect(mapStateToProps)(RootStack);

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <ConnectedRootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = "RootNavigator";
