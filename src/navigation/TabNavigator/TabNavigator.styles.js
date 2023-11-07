import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.js";

const styles = StyleSheet.create({
  tabBarContainer: {
    alignSelf: "center",
    borderRadius: 50,
    paddingTop: 10,
    width: "95%",
    minHeight: 60,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBarBadge: {
    backgroundColor: colors.secondary,
    width: 16,
    height: 18,
    borderRadius: 10,
    position: "absolute",
    top: 0,
  },
  tabBarLabel: {
    fontFamily: "KanitLightItalic",
    paddingBottom: 5,
    fontSize: 12,
  },

  badgeText: {
    color: "white",
    fontSize: 10.5,
  },
});

export default styles;
