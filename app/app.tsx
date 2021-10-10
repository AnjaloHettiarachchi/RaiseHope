import "./utils/ignore-warnings";
import React from "react";
import { useFonts } from "expo-font";
import { RootNavigator } from "./navigators";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store/configureStore";
import fonts from "./config/fonts";
import ReactiveThemeProvider from "../app/components/reactive-theme-provider/reactive-theme-provider";
import { darkTheme, lightTheme } from "./config/themes";

const { store, persistor } = configureStore();

function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) return null;

  return (
    <ReactiveThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </ReactiveThemeProvider>
  );
}

export default App;
