import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.js";

export default styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  listContainer: { flex: 1, paddingHorizontal: 15, marginTop: 15 },
  textItem: {
    fontSize: 18,
    marginLeft: 5,

    marginTop: 10,
    fontFamily: "KanitLightItalic",
    alignSelf: "center",
  },
  squareItem: {
    flex: 0.5,
    aspectRatio: 1,
    margin: 5,
    backgroundColor: "#F0F0F0",

    borderRadius: 10,
  },
  exercisesContainer: {
    marginTop: 10,
  },
  exerciseText: {
    marginHorizontal: 10,
    fontSize: 15,
    color: "grey",
    flexShrink: 1,
    width: "90%",
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
