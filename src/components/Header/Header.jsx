import React from "react";
import styles from "./Header.style";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Platform, TouchableOpacity } from "react-native";

const Header = ({ title = "myRoutine", navigation, route }) => {
  const backButtonIcon =
    Platform.OS === "ios" ? "chevron-back-outline" : "arrow-back";
  const excludedRoutes = [
    "myRoutine",
    "Home",
    "Profile",
    "MyRoutines",
    "Login",
    "SignUp",
  ];
  return (
    <View style={styles.container}>
      {!excludedRoutes.includes(route.name) && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name={backButtonIcon} size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
