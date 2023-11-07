import React, { useState } from "react";
import styles from "./SearchInput.style.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, TextInput, View } from "react-native";

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (text) => {
    setValue(text);
    onSearch(text);
  };

  const clearInput = () => {
    setValue("");
    onSearch("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChange}
        placeholder="Buscar Rutina"
      />
      <View style={styles.iconContainer}>
        <Pressable onPress={clearInput} style={styles.icon}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
        <Pressable onPress={clearInput} style={styles.icon}>
          <AntDesign name="closecircleo" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchInput;
