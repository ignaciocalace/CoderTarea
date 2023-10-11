import React from "react";
import { useSelector } from "react-redux";
import styles from "./MyRoutines.style";
import { View } from "react-native";
import RoutinesList from "../RoutinesList/RoutinesList.jsx";

const MyRoutines = ({ navigation, route }) => {
  const myRoutines = useSelector((state) => state.myroutines);

  return (
    <View style={styles.container}>
      <RoutinesList
        routines={myRoutines}
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default MyRoutines;
