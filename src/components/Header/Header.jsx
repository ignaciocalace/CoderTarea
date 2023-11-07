import React from "react";
import styles from "./Header.style";
import { useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { deleteSession } from "../../db/index.js";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { clearUser } from "../../store/features/userSlice.js";
import { logoutUser } from "../../store/features/authSlice.js";
import { Text, View, Platform, TouchableOpacity } from "react-native";
import { clearMyRoutines } from "../../store/features/myRoutinesSlice.js";
import { clearTraining } from "../../store/features/currentTrainingSlice.js";

const Header = ({ title = "myRoutine", navigation, route }) => {
  const dispatch = useDispatch();
  const backButtonIcon =
    Platform.OS === "ios" ? "chevron-back-outline" : "arrow-back";
  const excludedRoutes = [
    "myRoutine",
    "Profile",
    "MyRoutines",
    "Login",
    "SignUp",
    "MyRoutinesStack",
    "TrainingStack",
    "Training",
  ];

  const logout = () => {
    dispatch(logoutUser());
    dispatch(clearUser());
    dispatch(clearMyRoutines());
    dispatch(clearTraining());
    deleteSession();
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
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
      {route.name === "Profile" && (
        <Feather
          style={styles.rightCornerBtn}
          name="log-out"
          size={26}
          color="black"
          onPress={logout}
        />
      )}
      {route.name === "MyRoutines" && (
        <Menu style={styles.rightCornerBtn}>
          <MenuTrigger>
            <View style={styles.menuTrigger}>
              <Feather name="plus" size={24} color="black" />
            </View>
          </MenuTrigger>

          <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
            <MenuOption onSelect={() => navigation.navigate("RoutineInput")}>
              <View style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Crear Rutina</Text>
              </View>
            </MenuOption>
            <MenuOption
              onSelect={() => navigation.navigate("DefRoutinesLoader")}
            >
              <View style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Rutinas Predefinidas</Text>
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
      )}
    </View>
  );
};

export default Header;
