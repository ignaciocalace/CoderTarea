import styles from "./App.style.js";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store/index.js";
import fonts from "./src/global/fonts.js";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator/MainNavigator.jsx";
export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
