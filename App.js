import React from "react";
import styles from "./App.style.js";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { init } from "./src/db/index.js";
import store from "./src/store/index.js";
import fonts from "./src/global/fonts.js";
import Toast from "react-native-toast-message";
import { MenuProvider } from "react-native-popup-menu";
import { SafeAreaView, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator/MainNavigator.jsx";

init()
  .then(() => console.log("Database initialized"))
  .catch(() =>
    console.log((err) => console.log("Database not initialized", err))
  );

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MenuProvider>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
      <Toast />
    </MenuProvider>
  );
}
