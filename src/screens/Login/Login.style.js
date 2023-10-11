import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 20,
    color: "#333",
    fontSize: 18,
    fontFamily: "KanitLight",
  },

  signUpButton: {
    alignItems: "center",
    borderRadius: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#f5f5f5",
  },

  signUpButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "KanitItalic",
  },
});
