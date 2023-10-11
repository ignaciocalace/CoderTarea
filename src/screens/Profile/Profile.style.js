import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: "cover",
    marginBottom: 15,
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
});
