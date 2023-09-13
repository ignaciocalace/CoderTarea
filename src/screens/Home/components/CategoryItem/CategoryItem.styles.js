import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  cardContainer: {
    alignSelf: "center",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  text: { fontSize: 20, fontFamily: "KanitLightItalic" },
});
