import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./RoutineInput.style.js";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { addRoutine } from "../../store/features/myRoutinesSlice.js";
import { useCreateUserRoutineMutation } from "../../store/services/myRoutinesApi.js";

const ExerciseInput = ({ onComplete }) => {
  const [exercise, setExercise] = useState({
    name: "",
    descriptionExercise: "",
    sets: "",
    reps: "",
    weight: "",
    rest: "",
  });

  const labels = {
    name: "Nombre",
    descriptionExercise: "Descripción",
    sets: "Series",
    reps: "Repeticiones",
    weight: "Peso",
    rest: "Descanso",
  };

  const placeholders = {
    name: "Ej: Press Banca",
    descriptionExercise: "Ej: Subir explosivo, bajar lento",
    sets: "Ej: 3",
    reps: "Ej: 10-12",
    weight: "Ej: 10kg",
    rest: "Ej: 60 segundos",
  };

  const handleChange = (key, value) => {
    setExercise((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View>
      {Object.keys(exercise).map((key) => (
        <View key={key}>
          <Text style={styles.label}>{labels[key]}</Text>
          <TextInput
            style={styles.input}
            placeholder={placeholders[key]}
            value={exercise[key]}
            onChangeText={(text) => handleChange(key, text)}
          />
        </View>
      ))}
      <TouchableOpacity
        style={[styles.customButton, styles.buttonAddExercise]}
        onPress={() => {
          onComplete(exercise);
          setExercise({
            name: "",
            descriptionExercise: "",
            sets: "",
            reps: "",
            weight: "",
            rest: "",
          });
        }}
      >
        <Text style={styles.buttonText}>Agregar ejercicio</Text>
      </TouchableOpacity>
    </View>
  );
};

const RoutineInput = ({ navigation }) => {
  const [routineName, setRoutineName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [completedExercises, setCompletedExercises] = useState([]);
  const [createUserRoutine] = useCreateUserRoutineMutation();
  const { localId } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleCompleteExercise = (newExercise) => {
    setCompletedExercises([...completedExercises, newExercise]);
  };

  const handleSubmit = async () => {
    if (completedExercises.length === 0) {
      Toast.show({
        type: "error",
        text1: "⚠️ Agrega al menos un ejercicio",
      });
      return;
    }

    const newRoutine = {
      id: `${localId}-${Date.now()}`,
      routineName,
      description,
      category,
      exercises: completedExercises,
    };
    try {
      await createUserRoutine({ localId, routine: newRoutine });
      dispatch(addRoutine(newRoutine));
      setRoutineName("");
      setDescription("");
      setCategory("");
      setCompletedExercises([]);
      navigation.goBack();
      Toast.show({
        type: "success",
        text1: " ✅ Rutina guardada exitosamente",
      });
    } catch (error) {
      console.error("Error:", error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Hubo un problema al guardar la rutina",
      });
    }
  };

  const CompletedExercise = ({ data }) => {
    return (
      <View>
        <Text style={styles.exerciseText}>
          • {data?.name} | {data?.sets}s x {data?.reps}r | {data?.weight} |
          Descanso: {data?.rest}
        </Text>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.containerInfoRoutine}>
            <Text style={styles.title}>Info Rutina</Text>
            <View style={styles.sectionInfo}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: Pecho y triceps Hipertrofia"
                onChangeText={setRoutineName}
              />
              <Text style={styles.label}>Descripción</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: Muchas repeticiones, poco descanso..."
                onChangeText={setDescription}
              />
              <Text style={styles.label}>Categoría</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: Pecho, triceps"
                onChangeText={setCategory}
              />
            </View>
            <Text style={styles.title}>Agregar Ejercicio</Text>
            <View style={styles.sectionExercises}>
              <ExerciseInput onComplete={handleCompleteExercise} />
            </View>
            <View>
              {completedExercises.length > 0 ? (
                <Text style={styles.title}>Ejercicios Agregados</Text>
              ) : (
                <Text style={styles.title}>
                  Aún no hay ejercicios agregados
                </Text>
              )}
            </View>
            {completedExercises.map((exercise, index) => (
              <CompletedExercise key={index} data={exercise} />
            ))}
            <TouchableOpacity
              style={[styles.customButton, styles.buttonAddRoutine]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Guardar Rutina</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RoutineInput;
