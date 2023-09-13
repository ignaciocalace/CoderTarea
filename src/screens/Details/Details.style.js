import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    marginVertical: 15,
    borderRadius: 10,
  },
  infoContainer: {
    width: windowWidth * 0.9,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontFamily: "KanitLightItalic",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: "KanitLight",
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontFamily: "KanitMediumItalic",
    alignSelf: "center",
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
  backButton: {
    backgroundColor: "#337CCF",
  },
  homeButton: {
    backgroundColor: "#016A70",
  },
  buttonText: {
    color: colors.quaternary,
  },
});
