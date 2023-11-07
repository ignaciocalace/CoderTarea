import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors.js";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontFamily: "KanitLightItalic",
    marginBottom: 30,
  },

  infoContainer: {
    width: windowWidth * 0.9,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignItems: "stretch",
  },

  input: {
    width: "100%",
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 15,
    paddingLeft: 5,
    fontSize: 16,
  },
  noInput: {
    width: "100%",
    height: 45,
    marginTop: 15,
    paddingLeft: 5,
    fontSize: 16,
    textAlignVertical: "center",
  },
  dateBtn: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 10,
  },
  registerButton: {
    marginTop: 30,
    backgroundColor: "#016A70",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontFamily: "KanitMediumItalic",
    fontSize: 18,
  },

  loginText: {
    marginTop: 25,
    color: "#333",
    fontSize: 18,
    fontFamily: "KanitLight",
  },

  loginButton: {
    alignItems: "center",
    borderRadius: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#f5f5f5",
  },

  loginButtonText: {
    color: "#333",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "KanitItalic",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    width: "60%",
    alignItems: "bottom",
    marginHorizontal: 5,
  },

  pickerContainer: {
    height: 40,
    width: "60%",
    marginBottom: 10,
  },
  picker: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  customButton: {
    width: "60%",
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonCreate: {
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    textAlign: "center",
    padding: 10,
    backgroundColor: colors.primary,
    marginTop: 10,
  },
  datePickerContainer: {
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 200,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
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
});

export default styles;
