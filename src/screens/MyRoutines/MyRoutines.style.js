import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.js";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerButtons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    width: "60%",
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "KanitMedium",
    fontSize: 16,
  },
  buttonCreate: {
    backgroundColor: colors.primary,
  },
  buttonFind: {
    backgroundColor: colors.secondary,
  },
});
