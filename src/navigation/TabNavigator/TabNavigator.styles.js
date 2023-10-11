import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    right: -8,
    top: 0,
    backgroundColor: "red",
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
  },
});

export default styles;
