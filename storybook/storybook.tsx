import React from "react";
import { configure, getStorybookUI } from "@storybook/react-native";
import ReactiveThemeProvider from "../app/components/reactive-theme-provider/reactive-theme-provider";
import { darkTheme, lightTheme } from "../app/config/themes";
import { useFonts } from "expo-font";
import fonts from "../app/config/fonts";

declare let module: any;

configure(() => {
  require("./storybook-registry");
}, module);

const StorybookUI = getStorybookUI({
  port: 9001,
  host: "localhost",
  onDeviceUI: true,
  asyncStorage:
    require("@react-native-async-storage/async-storage").default || null,
});

export function StorybookUIRoot() {
  const [loaded] = useFonts(fonts);

  if (!loaded) return null;

  return (
    <ReactiveThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <StorybookUI />
    </ReactiveThemeProvider>
  );
}
