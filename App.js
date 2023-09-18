import { useFonts } from "expo-font";
import fonts from "./src/global/fonts.js";
import { SafeAreaView } from "react-native";
import styles from "./App.style.js";
import StackNavigator from "./src/navigation/StackNavigator.js";
export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StackNavigator />
    </SafeAreaView>
  );
}
