import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/colors.js";
const windowWidth = Dimensions.get("window").width;
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 20,
  },
  changeImage: {
    backgroundColor: "#4f4f4f",
    padding: 10,
    borderRadius: 5,
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "KanitLight",
  },
  cameraButton: {
    backgroundColor: "#4f4f4f",
    padding: 10,
    borderRadius: 5,
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "KanitLight",
  },

  bottomSheetBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomSheetContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  bottomSheetOption: {
    marginVertical: 10,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#016A70",
  },
  rowBottomSheet: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#f0f0f0",
  },
  imageBottomSheet: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    borderRadius: 100,
    resizeMode: "cover",
  },
  changeImageButtonContainer: {
    position: "absolute",
    bottom: 0,
    right: -2,
  },

  changeImageButton: {
    backgroundColor: "#4f4f4f",
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  rowCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoUser: {
    width: "100%",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: 100,
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontFamily: "KanitLight",
    color: "#333",
    marginBottom: 5,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
    color: "#555",
    fontFamily: "KanitLightItalic",
  },
  genderIcon: {
    alignSelf: "flex-start",
    fontSize: 24,
    marginLeft: 5,
  },
  bottomSheetContainer: {
    alignItems: "center",
    width: "100%",
  },
  editButtonContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,

    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 28,
    fontFamily: "KanitLightItalic",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    marginVertical: 5,
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
  containerButtons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    width: "60%",
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
  buttonConfirm: {
    backgroundColor: colors.primary,
  },
  buttonCancel: {
    backgroundColor: colors.secondary,
  },
  datePickerContainer: {
    alignItems: "center",
  },

  closeButton: {
    textAlign: "center",
    padding: 10,
    backgroundColor: colors.primary,
    marginTop: 10,
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
