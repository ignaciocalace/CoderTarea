import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Modal,
} from "react-native";
import styles from "./SignUp.style.js";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { insertSession } from "../../db/index.js";
import React, { useCallback, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { loginUser } from "../../store/features/authSlice.js";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSignUpMutation } from "../../store/services/authApi.js";
import { useUpdateUserDataMutation } from "../../store/services/userApi.js";

const SignUp = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("O");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useDispatch();

  const [openHeight, setOpenHeight] = useState(false);
  const [openWeight, setOpenWeight] = useState(false);
  const [openGender, setOpenGender] = useState(false);

  const onHeightOpen = useCallback(() => {
    setOpenWeight(false);
    setOpenGender(false);
  });

  const openWeightOpen = useCallback(() => {
    setOpenHeight(false);
    setOpenGender(false);
  });

  const openGenderOpen = useCallback(() => {
    setOpenHeight(false);
    setOpenWeight(false);
  });

  const [triggerSignUp] = useSignUpMutation();
  const [triggerUpdateUserData] = useUpdateUserDataMutation();

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setSelectedDate(selectedDate);
      setShowDatePicker(false);
    }
  };

  const displayDate =
    selectedDate instanceof Date
      ? `${selectedDate.getDate()}/${
          selectedDate.getMonth() + 1
        }/${selectedDate.getFullYear()}`
      : "Selecciona una fecha";

  const onSubmit = async () => {
    if (!userName || !email || !password || !confirmPassword || !fullName) {
      Toast.show({
        type: "error",
        text1: "Campos Incompletos",
        text2: "Por favor, completa todos los campos.",
      });
      return;
    }

    if (password === confirmPassword) {
      try {
        const signUpResponse = await triggerSignUp({ email, password });
        if (signUpResponse.error?.data.error.message === "EMAIL_EXISTS") {
          Toast.show({
            type: "error",
            text1: "Correo Existente",
            text2: "El correo con el que intentas registrar ya existe.",
          });
        } else if (
          signUpResponse.error?.data.error.message === "INVALID_EMAIL"
        ) {
          Toast.show({
            type: "error",
            text1: "Correo Inválido",
            text2: "El correo con el que intentas registrar es inválido.",
          });
        } else if (
          signUpResponse.error?.data.error.message === "WEAK_PASSWORD"
        ) {
          Toast.show({
            type: "error",
            text1: "Contraseña Debil",
            text2: "La contraseña debe tener al menos 6 caracteres.",
          });
        }
        if (signUpResponse.data) {
          const userId = signUpResponse.data.localId;
          const userProfileResponse = await triggerUpdateUserData({
            localId: userId,
            userName,
            fullName,
            birthDate: selectedDate,
            gender,
            height,
            heightUnit,
            weight,
            weightUnit,
          });

          if (userProfileResponse.data) {
            dispatch(loginUser(signUpResponse.data));

            await insertSession({
              localId: signUpResponse.data.localId,
              email: signUpResponse.data.email,
              token: signUpResponse.data.idToken,
            });
          }
        }
      } catch (error) {
        console.error("Error:", error);
        Toast.show({
          type: "error",
          text1: "Error al Registrar",
          text2: "Ocurrió un error al registrar tu cuenta.",
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Contraseñas No Coinciden",
        text2: "Las contraseñas no coinciden. Inténtalo de nuevo.",
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Registrar Cuenta</Text>
          <View style={styles.infoContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              value={userName}
              onChangeText={setUserName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Contraseña"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre Completo"
              value={fullName}
              onChangeText={setFullName}
            />
            <View style={styles.inputContainer}>
              <View style={styles.row}>
                <TextInput
                  style={styles.input}
                  placeholder="Altura"
                  keyboardType="numeric"
                  value={height}
                  onChangeText={setHeight}
                />
                <DropDownPicker
                  items={[
                    { label: "cm", value: "cm" },
                    { label: "in", value: "in" },
                  ]}
                  listMode="SCROLLVIEW"
                  open={openHeight}
                  onOpen={onHeightOpen}
                  setOpen={setOpenHeight}
                  value={heightUnit}
                  setValue={setHeightUnit}
                  containerStyle={styles.pickerContainer}
                  style={styles.picker}
                  zIndex={3000}
                  zIndexInverse={1000}
                  dropDownDirection="TOP"
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.row}>
                <TextInput
                  style={styles.input}
                  placeholder="Peso"
                  keyboardType="numeric"
                  value={weight}
                  onChangeText={setWeight}
                />
                <DropDownPicker
                  items={[
                    { label: "kg", value: "kg" },
                    { label: "lb", value: "lb" },
                  ]}
                  listMode="SCROLLVIEW"
                  open={openWeight}
                  setOpen={setOpenWeight}
                  onOpen={openWeightOpen}
                  value={weightUnit}
                  setValue={setWeightUnit}
                  containerStyle={styles.pickerContainer}
                  style={styles.picker}
                  zIndex={2000}
                  zIndexInverse={5000}
                  dropDownDirection="TOP"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.row}>
                <Text style={styles.noInput}>Género</Text>
                <DropDownPicker
                  items={[
                    { label: "Masculino", value: "M" },
                    { label: "Femenino", value: "F" },
                    { label: "Otro", value: "O" },
                    { label: "Prefiero no decirlo", value: "N" },
                  ]}
                  listMode="SCROLLVIEW"
                  open={openGender}
                  setOpen={setOpenGender}
                  onOpen={openGenderOpen}
                  value={gender}
                  setValue={setGender}
                  containerStyle={styles.pickerContainer}
                  style={styles.picker}
                  zIndex={1000}
                  zIndexInverse={3000}
                  dropDownDirection="TOP"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.row}>
                <Text style={styles.noInput}>Fecha de Nacimiento</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (Platform.OS === "ios") {
                      setShowDatePicker(true);
                    } else if (Platform.OS === "android") {
                      setShowDatePicker(true);
                    }
                  }}
                >
                  <Text style={styles.dateBtn}>{displayDate}</Text>
                </TouchableOpacity>
              </View>
            </View>

            {Platform.OS === "ios" && showDatePicker && (
              <Modal
                visible={showDatePicker}
                transparent={true}
                animationType="slide"
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <View style={styles.datePickerContainer}>
                      <DateTimePicker
                        value={selectedDate}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                        themeVariant="light"
                      />
                      <TouchableOpacity
                        style={[styles.customButton, styles.closeButton]}
                        onPress={() => setShowDatePicker(false)}
                      >
                        <Text style={styles.buttonText}>Cerrar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            )}
            {Platform.OS === "android" && showDatePicker && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
            <TouchableOpacity style={styles.registerButton} onPress={onSubmit}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>Ya tienes una cuenta?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.customButton, styles.buttonCreate]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.buttonText}>Inicia sesión aquí</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
