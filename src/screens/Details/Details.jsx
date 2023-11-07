import React, { useState } from "react";
import styles from "./Details.style.js";
import { Ionicons } from "@expo/vector-icons";
import {
  addRoutine,
  removeRoutine,
} from "../../store/features/myRoutinesSlice.js";
import {
  useCreateUserRoutineMutation,
  useDeleteUserRoutineMutation,
} from "../../store/services/myRoutinesApi";
import {
  clearTraining,
  setTraining,
} from "../../store/features/currentTrainingSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, View, TouchableOpacity, Modal } from "react-native";
import { useDeleteCurrentTrainingMutation } from "../../store/services/currentTrainingApi.js";

const Details = ({ route, navigation }) => {
  const { routine } = route.params;
  const myRoutines = useSelector((state) => state.myRoutines);
  const { localId } = useSelector((state) => state.auth);
  const isRoutineInMyRoutines = myRoutines.some(
    (item) => item.id === routine.id
  );
  const [createUserRoutine] = useCreateUserRoutineMutation();
  const [deleteUserRoutine] = useDeleteUserRoutineMutation();
  const [isAddedToMyRoutines, setIsAddedToMyRoutines] = useState(
    isRoutineInMyRoutines
  );
  const [deleteCurrentTraining] = useDeleteCurrentTrainingMutation();

  const dispatch = useDispatch();
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const toggleDeleteModal = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
  };

  const handleMyRoutines = () => {
    if (isAddedToMyRoutines) {
      if (myRoutines.includes(routine)) {
        toggleDeleteModal();
      } else {
        dispatch(removeRoutine(routine));
        deleteUserRoutine({ localId: localId, routineId: routine.id });
      }
    } else {
      dispatch(addRoutine(routine));
      setIsAddedToMyRoutines(!isAddedToMyRoutines);
      createUserRoutine({ localId: localId, routine });
    }
  };

  const handleDeleteRoutine = () => {
    deleteUserRoutine({ localId: localId, routineId: routine.id });
    dispatch(removeRoutine(routine));
    setIsDeleteModalVisible(false);
    navigation.navigate("MyRoutines");
  };

  const setCurrentTraining = async () => {
    await deleteCurrentTraining(localId);
    dispatch(clearTraining());
    dispatch(setTraining(routine));
    navigation.navigate("TrainingStack");
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
          {routine.description ? (
            <Text style={styles.description}>{routine.description}</Text>
          ) : null}
          {routine.exercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              {exercise.descriptionExercise ? (
                <Text style={styles.exerciseDescription}>
                  {exercise.descriptionExercise}
                </Text>
              ) : null}

              <Text style={styles.exerciseDetail}>
                Series: {exercise.sets} | Repeticiones: {exercise.reps} |
                Descanso: {exercise.rest}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.customButton, styles.buttonCreate]}
            onPress={() => setCurrentTraining()}
          >
            <Text style={styles.buttonText}>Comenzar a entrenar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDeleteModalVisible}
        onRequestClose={toggleDeleteModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Desea eliminar esta rutina?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.customButton, styles.cancelButton]}
                onPress={toggleDeleteModal}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.customButton, styles.deleteButton]}
                onPress={handleDeleteRoutine}
              >
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Details;
