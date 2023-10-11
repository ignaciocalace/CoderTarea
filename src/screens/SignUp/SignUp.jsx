import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./SignUp.style.js";
import { useSignUpMutation } from "../../services/authApi.js";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/auth/authSlice.js";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [triggerSignUp, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (password === confirmPassword) {
      triggerSignUp({ email, password });
    }
  };
  useEffect(() => {
    if (result.isSuccess) {
      dispatch(loginUser(result.data));
    }
  }, [result]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Cuenta</Text>
      <View style={styles.infoContainer}>
        {/* <TextInput style={styles.input} placeholder="Nombre" value={email}/> */}
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
        <TouchableOpacity style={styles.registerButton} onPress={onSubmit}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>Ya tienes una cuenta?</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>Inicia sesión aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
