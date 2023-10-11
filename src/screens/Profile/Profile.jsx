import React from "react";
import styles from "./Profile.style";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/auth/authSlice.js";
import { View, Text, Image, Pressable, Alert } from "react-native";

const Profile = () => {
  const image = useSelector((state) => state.auth.imageCamera);
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    return granted;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    } else {
      Alert.alert(
        "Permisos de cámara requeridos",
        "Esta aplicación necesita acceso a la cámara para continuar. Por favor, otorga los permisos en la configuración de tu dispositivo.",
        [{ text: "Cancelar", style: "cancel" }, { text: "Entendido" }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image
              ? image
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          }}
          style={styles.image}
        />

        <Pressable onPress={pickImage}>
          <Text style={styles.changeImage}>Cambiar foto de perfil</Text>
        </Pressable>
      </View>

      <Text style={styles.name}>Username: userdefault</Text>
      <Text style={styles.detail}>Email: userdefault@example.com</Text>
      <Text style={styles.detail}>Birth date : 01/01/2000</Text>
    </View>
  );
};

export default Profile;
