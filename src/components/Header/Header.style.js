import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    paddingLeft: 15,
    fontFamily: "KanitMediumItalic",
    color: "black",
  },
  rightCornerBtn: { marginRight: 15 },
  menuOptionsContainer: {
    width: 200,
    borderRadius: 10,
    elevation: 5,
  },
  menuOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  menuOptionText: {
    fontSize: 16,
  },
  menuTrigger: {
    marginRight: 10,
    marginTop: 10,
  },
});
