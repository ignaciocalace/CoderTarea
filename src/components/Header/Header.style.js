import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.js";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "KanitMediumItalic",
    color: "white",
  },
});
