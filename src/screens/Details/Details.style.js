import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginBottom: 10,
  },

  exerciseContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 5,
  },

  exerciseName: {
    fontWeight: "bold",
    fontSize: 18,
  },

  exerciseDetail: {
    marginTop: 5,
  },
});
