import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.js";

export default styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  listContainer: { flex: 1, paddingHorizontal: 15, marginTop: 15 },
  textItem: {
    fontSize: 18,
    marginLeft: 5,
    fontFamily: "KanitLightItalic",
    marginBottom: 5,
  },

  underline: {
    borderBottomColor: colors.tertiary,
    borderBottomWidth: 0.9,
    width: "80%",
  },
  buttonsNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  homeButton: {
    backgroundColor: "#016A70",
  },
  buttonText: {
    color: colors.quaternary,
  },
});
