import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.js";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  sectionInfo: {
    marginBottom: 15,
    marginHorizontal: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e0e0e0",
  },
  containerInfoRoutine: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: "KanitMedium",
  },
  sectionExercises: { marginHorizontal: 5 },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontFamily: "KanitLightItalic",
  },
  label: {
    fontFamily: "KanitMedium",
  },
  exerciseText: {
    fontFamily: "KanitLight",
    marginLeft: 10,
    fontSize: 16,
  },
  customButton: {
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
  buttonAddExercise: {
    backgroundColor: colors.primary,
  },
  buttonAddRoutine: {
    backgroundColor: colors.secondary,
  },
});
export default styles;
