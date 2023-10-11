import styles from "./Login.style.js";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../services/authApi.js";
import { loginUser } from "../../features/auth/authSlice.js";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

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
    }
  }, [result]);
  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <Text style={styles.signUpText}>No tienes una cuenta?</Text>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpButtonText}>Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
