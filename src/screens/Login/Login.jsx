import {
  View,
  Text,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./Login.style.js";
import { useDispatch } from "react-redux";
import { insertSession } from "../../db/index.js";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { loginUser } from "../../store/features/authSlice.js";
import { useLoginMutation } from "../../store/services/authApi.js";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerLogin({ email, password });
  };

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(loginUser(result.data));
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken,
      })
        .then((result) => console.log("Result: ", result))
        .catch((error) => console.log("Error: ", error));
    } else if (result.isError) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Usuario y/o contraseña incorrectos",
      });
    }
  }, [result]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../assets/img/PersonalTrainer.png")}
          />
          <Text style={styles.title}>Iniciar Sesión</Text>
          <View style={styles.infoContainer}>
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

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.customButton, styles.buttonCreate]}
                onPress={onSubmit}
              >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.signUpText}>No tienes una cuenta?</Text>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.buttonText}>Regístrate aquí</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
