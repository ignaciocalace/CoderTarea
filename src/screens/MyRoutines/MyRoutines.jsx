import React from "react";
import styles from "./MyRoutines.style";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading.jsx";
import { View, Text, TouchableOpacity } from "react-native";
import RoutinesList from "../RoutinesList/RoutinesList.jsx";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const MyRoutines = ({ navigation, route }) => {
  const myRoutines = useSelector((state) => state.myRoutines);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {!myRoutines ? (
          <Loading />
        ) : myRoutines && myRoutines.length > 0 ? (
          <RoutinesList
            routines={myRoutines}
            navigation={navigation}
            route={route}
          />
        ) : (
          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={[styles.customButton, styles.buttonCreate]}
              onPress={() => navigation.navigate("RoutineInput")}
            >
              <Text style={styles.buttonText}>Crear mi rutina</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.customButton, styles.buttonFind]}
              onPress={() => navigation.navigate("DefRoutinesLoader")}
            >
              <Text style={styles.buttonText}>
                Buscar rutina predeterminada
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default MyRoutines;
