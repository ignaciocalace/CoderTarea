import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Platform,
} from "react-native";
import styles from "./Profile.style";
import {
  useUpdateProfileImageMutation,
  useUpdateUserDataMutation,
} from "../../store/services/userApi.js";
import Toast from "react-native-toast-message";
import BottomSheet from "@gorhom/bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useCallback, useRef, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import { setImage, updateUser } from "../../store/features/userSlice.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const { localId } = useSelector((state) => state.auth);
  const image = useSelector((state) => state.user.image);

  const [triggerSetImageProfile] = useUpdateProfileImageMutation();
  const [triggerUpdateUserData] = useUpdateUserDataMutation();

  const bottomSheetRefImg = useRef(null);
  const bottomSheetRefData = useRef(null);
  const [tempImage, setTempImage] = useState(null);

  const age = calculateAge(userData?.birthDate);

  const [fullName, setFullName] = useState(userData?.fullName);
  const [height, setHeight] = useState(userData?.height);
  const [heightUnit, setHeightUnit] = useState(userData?.heightUnit);
  const [weight, setWeight] = useState(userData?.weight);
  const [weightUnit, setWeightUnit] = useState(userData?.weightUnit);
  const [gender, setGender] = useState(userData?.gender);
  const [selectedDate, setSelectedDate] = useState(
    new Date(userData?.birthDate) || new Date()
  );
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (event.type === "set") {
      setSelectedDate(date);
      setDisplayDate(date.toLocaleDateString());
    }
    setShowDatePicker(false);
  };
  const [displayDate, setDisplayDate] = useState(
    selectedDate instanceof Date
      ? `${selectedDate.getDate()}/${
          selectedDate.getMonth() + 1
        }/${selectedDate.getFullYear()}`
      : "Selecciona una fecha"
  );
  const editedBirthDate = selectedDate.toISOString();
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

  function calculateAge(birthDateStr) {
    const birthDate = new Date(birthDateStr);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const isBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!isBirthdayPassed) {
      age--;
    }

    return age;
  }

  function selectGenderIcon(gender) {
    switch (gender) {
      case "M":
        return "mars";
      case "F":
        return "venus";
      default:
        return "genderless";
    }
  }

  function selectGenderIconColor(gender) {
    switch (gender) {
      case "M":
        return "blue";
      case "F":
        return "pink";
      default:
        return "gray";
    }
  }

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    return granted;
  };

  const verifyGalleryPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return granted;
  };

  const openCamera = async () => {
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
        setTempImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    } else {
      Alert.alert(
        "Permisos de cámara requeridos",
        "Esta aplicación necesita acceso a la cámara para continuar. Por favor, otorga los permisos en la configuración de tu dispositivo.",
        [{ text: "Cancelar", style: "cancel" }, { text: "Entendido" }]
      );
    }
  };

  const openGallery = async () => {
    const isGalleryOk = await verifyGalleryPermissions();
    if (isGalleryOk) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        setTempImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    } else {
      Alert.alert(
        "Permisos de galería requeridos",
        "Esta aplicación necesita acceso a la galería para continuar. Por favor, otorga los permisos en la configuración de tu dispositivo.",
        [{ text: "Cancelar", style: "cancel" }, { text: "Entendido" }]
      );
    }
  };

  const confirmImage = () => {
    dispatch(setImage(tempImage));
    triggerSetImageProfile({ image: tempImage, localId });
    closeBottomSheetImg();
  };

  const cancelImage = () => {
    setTempImage(null);
    closeBottomSheetImg();
  };

  const closeBottomSheetImg = () => {
    bottomSheetRefImg.current?.close();
  };

  const saveChanges = async () => {
    try {
      const editedUserData = {
        fullName: fullName || userData?.fullName,
        height: height || userData?.height,
        heightUnit: heightUnit || userData?.heightUnit,
        weight: weight || userData?.weight,
        weightUnit: weightUnit || userData?.weightUnit,
        birthDate: editedBirthDate,
        gender: gender || userData?.gender,
      };
      const responseUserData = await triggerUpdateUserData({
        localId,
        ...editedUserData,
      });
      if (responseUserData.data) {
        dispatch(updateUser(editedUserData));
        Toast.show({
          type: "success",
          text1: "Cambios guardados",
          text2: "Los cambios se han guardado correctamente.",
        });
        bottomSheetRefData.current.close();
      } else {
        Toast.show({
          type: "error",
          text1: "Error al guardar los cambios",
          text2: "Ha ocurrido un error al intentar guardar los cambios.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Toast.show({
        type: "error",
        text1: "Error al guardar los cambios",
        text2: "Ha ocurrido un error al intentar guardar los cambios.",
      });
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: image
                  ? image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
              }}
              style={styles.image}
            />
            <View style={styles.changeImageButtonContainer}>
              <TouchableOpacity
                onPress={() => bottomSheetRefImg.current?.expand()}
                style={styles.changeImageButton}
              >
                <MaterialIcons name="photo-camera" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{userData?.fullName} </Text>
            <View style={styles.rowCard}>
              <Text style={styles.detail}>{age} años</Text>
              <FontAwesome
                name={selectGenderIcon(userData?.gender)}
                size={24}
                color={selectGenderIconColor(userData?.gender)}
                style={styles.genderIcon}
              />
            </View>

            <Text style={styles.detail}>
              {userData?.height}
              {userData?.heightUnit}
            </Text>
            <Text style={styles.detail}>
              {userData?.weight}
              {userData?.weightUnit}
            </Text>
            <View style={styles.editButtonContainer}>
              <TouchableOpacity
                onPress={() => bottomSheetRefData.current?.expand()}
              >
                <FontAwesome name="edit" size={20} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <BottomSheet ref={bottomSheetRefImg} index={-1} snapPoints={["90%"]}>
          <View style={styles.bottomSheetContainer}>
            <Image
              source={{
                uri: tempImage ? tempImage : image,
              }}
              style={styles.imageBottomSheet}
            />
            <View style={styles.rowBottomSheet}>
              <TouchableOpacity
                onPress={openCamera}
                style={styles.bottomSheetOption}
              >
                <Text style={styles.buttonText}>Usar cámara</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={openGallery}
                style={styles.bottomSheetOption}
              >
                <Text style={styles.buttonText}>Seleccionar de la galería</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={cancelImage}
              style={[styles.customButton, styles.buttonCancel]}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={confirmImage}
              style={[styles.customButton, styles.buttonConfirm]}
            >
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
        <BottomSheet ref={bottomSheetRefData} index={-1} snapPoints={["90%"]}>
          <ScrollView>
            <View style={styles.bottomSheetContainer}>
              <Text style={styles.title}>Editar perfil</Text>
              <View style={styles.inputContainer}>
                <View style={styles.row}>
                  <TextInput
                    style={styles.input}
                    placeholder="Nombre Completo"
                    value={fullName}
                    onChangeText={setFullName}
                  />
                </View>
              </View>
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
              <TouchableOpacity
                style={[styles.customButton, styles.buttonCancel]}
                onPress={() => {
                  bottomSheetRefData.current.close();
                }}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.customButton, styles.buttonConfirm]}
                onPress={() => {
                  saveChanges();
                }}
              >
                <Text style={styles.buttonText}>Guardar cambios</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </BottomSheet>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Profile;
