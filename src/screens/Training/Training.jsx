import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./Training.style.js";
import Toast from "react-native-toast-message";
import { CheckBox } from "react-native-elements";
import React, { useState, useEffect } from "react";
import {
  useDeleteCurrentTrainingMutation,
  useUpdateCurrentTrainingMutation,
} from "../../store/services/currentTrainingApi.js";
import { useSelector, useDispatch } from "react-redux";
import { clearTraining } from "../../store/features/currentTrainingSlice.js";

const initializeExercises = (training) => {
  if (training && Array.isArray(training.exercises)) {
    return training.exercises.map((exercise) => {
      if (!exercise.hasOwnProperty("completed")) {
        exercise = { ...exercise, completed: false };
      }
      return exercise;
    });
  }
  return [];
};

const Training = ({ navigation }) => {
  const currentTraining = useSelector((state) => state.currentTraining);
  const { localId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [deleteCurrentTraining] = useDeleteCurrentTrainingMutation();
  const [updateCurrentTraining] = useUpdateCurrentTrainingMutation();
  const [initializedTraining, setInitializedTraining] = useState({
    exercises: [],
  });

  useEffect(() => {
    if (currentTraining) {
      const exercises = initializeExercises(currentTraining);
      setInitializedTraining({ ...currentTraining, exercises });
    } else {
      setInitializedTraining({ exercises: [] });
    }
  }, [currentTraining]);

  const handleCheckBoxPress = async (index) => {
    const updatedTraining = { ...initializedTraining };
    updatedTraining.exercises[index].completed =
      !updatedTraining.exercises[index].completed;
    setInitializedTraining(updatedTraining);

    try {
      await updateCurrentTraining({
        localId,
        ...updatedTraining,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEndTraining = async () => {
    try {
      await deleteCurrentTraining(localId);
      dispatch(clearTraining());
      setIsModalVisible(false);
      setInitializedTraining({ exercises: [] });
      Toast.show({
        type: "success",
        text1: "Entrenamiento finalizado",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  if (!currentTraining) {
    return (
      <View style={[styles.container, styles.containerCentered]}>
        <Image
          style={styles.image}
          source={require("../../assets/img/Gym-rafiki.png")}
        />
        <Text style={styles.title}>No hay entrenamientos en curso</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.customButton, styles.buttonCreate]}
            onPress={() => navigation.navigate("MyRoutines")}
          >
            <Text style={styles.buttonText}>Ir a mis rutinas</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Text style={styles.title}>{initializedTraining?.routineName}</Text>
        <View style={styles.infoContainer}>
          {initializedTraining?.exercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseContainer}>
              <View style={styles.exerciseInfoContainer}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                {exercise.descriptionExercise ? (
                  <Text style={styles.exerciseDescription}>
                    {exercise.descriptionExercise}
                  </Text>
                ) : null}
                <Text style={styles.exerciseDetail}>
                  Series: {exercise.sets}
                </Text>
                <Text style={styles.exerciseDetail}>
                  Repeticiones: {exercise.reps}
                </Text>
                <Text style={styles.exerciseDetail}>
                  Descanso: {exercise.rest}
                </Text>
              </View>
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  checked={exercise.completed}
                  onPress={() => {
                    handleCheckBoxPress(index);
                  }}
                />
              </View>
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.customButton, styles.buttonCreate]}
            onPress={() => setIsModalVisible(true)}
          >
            <Text style={styles.buttonText}>Finalizar entrenamiento</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              ¿Desea finalizar el entrenamiento?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.customButton, styles.cancelButton]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.customButton, styles.FinishButton]}
                onPress={handleEndTraining}
              >
                <Text style={styles.buttonText}>Finalizar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Training;
