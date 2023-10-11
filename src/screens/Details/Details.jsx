import React, { useState } from "react";
import styles from "./Details.style.js";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addRoutine,
  removeRoutine,
} from "../../features/myRoutines/myRoutinesSlice.js";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";

const Details = ({ route }) => {
  const { routine } = route.params;
  const myRoutines = useSelector((state) => state.myroutines);
  const isRoutineInMyRoutines = myRoutines.some(
    (item) => item.id === routine.id
  );

  const [isAddedToMyRoutines, setIsAddedToMyRoutines] = useState(
    isRoutineInMyRoutines
  );
  const dispatch = useDispatch();

  const handleMyRoutines = () => {
    if (isAddedToMyRoutines) {
      dispatch(removeRoutine(routine));
    } else {
      dispatch(addRoutine(routine));
    }
    setIsAddedToMyRoutines(!isAddedToMyRoutines);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{routine.routineName}</Text>
            <TouchableOpacity onPress={handleMyRoutines} style={styles.icon}>
              <Ionicons
                name={isAddedToMyRoutines ? "remove-circle" : "add-circle"}
                size={24}
                color={isAddedToMyRoutines ? "red" : "green"}
              />
            </TouchableOpacity>
          </View>
          {routine.exercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseDetail}>
                Sets: {exercise.sets} | Reps: {exercise.reps} | Rest:{" "}
                {exercise.rest}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
