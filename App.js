import { useFonts } from "expo-font";
import fonts from "./src/global/fonts.js";
import { SafeAreaView } from "react-native";
import styles from "./App.style.js";
import MainTabNavigator from "./src/navigation/MainTabNavigator/MainTabNavigator.jsx";
import { Provider } from "react-redux";
import store from "./src/store/index.js";
export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainTabNavigator />
      </SafeAreaView>
    </Provider>
  );
}
