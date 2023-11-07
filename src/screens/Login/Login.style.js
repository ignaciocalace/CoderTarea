import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors.js";

const windowWidth = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: windowWidth * 0.55,
    height: windowWidth * 0.55,
  },
  title: {
    fontSize: 28,
    fontFamily: "KanitLightItalic",
    marginBottom: 20,
  },

  infoContainer: {
    width: windowWidth * 0.9,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignItems: "center",
  },

  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
    paddingLeft: 5,
  },

  loginButton: {
    marginTop: 20,
    backgroundColor: "#337CCF",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontFamily: "KanitMediumItalic",
  },
  signUpText: {
    marginTop: 10,
    color: "#333",
    fontSize: 18,
    fontFamily: "KanitLight",
  },

  signUpButton: {
    marginTop: 10,
    backgroundColor: "#016A70",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },

  signUpButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "KanitItalic",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    width: "80%",
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
});
