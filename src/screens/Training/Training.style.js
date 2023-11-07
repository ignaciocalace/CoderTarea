import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors.js";

const windowWidth = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerCentered: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
  },
  infoContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
    alignItems: "center",
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

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontFamily: "KanitLightItalic",
  },

  icon: {
    marginLeft: 10,
  },

  description: {
    fontSize: 16,
    fontFamily: "KanitLight",
  },

  exerciseContainer: {
    width: "90%",
    borderBottomWidth: 0.7,
    borderBottomColor: "#ccc",
    paddingVertical: 5,
    flexDirection: "row",
  },

  exerciseName: {
    fontFamily: "KanitBold",
    fontSize: 18,
  },
  exerciseDescription: {
    fontFamily: "KanitLightItalic",
    fontSize: 16,
  },
  exerciseDetail: {
    fontFamily: "KanitLight",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontFamily: "KanitItalic",

    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cancelButton: {
    fontSize: 16,
    marginRight: 20,
    color: "blue",
  },
  deleteButton: {
    fontSize: 16,
    color: "red",
  },
  exerciseInfoContainer: {
    flex: 1,
  },

  checkBoxContainer: {
    alignSelf: "center",
  },
  cancelButton: {
    width: "auto",
    fontSize: 16,
    paddingHorizontal: 10,
    marginRight: 20,

    backgroundColor: colors.secondary,
  },
  FinishButton: {
    width: "auto",
    fontSize: 16,
    paddingHorizontal: 10,

    backgroundColor: colors.primary,
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
