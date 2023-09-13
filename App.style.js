import { Platform, StatusBar, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
