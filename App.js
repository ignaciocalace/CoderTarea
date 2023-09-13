import { useState } from "react";
import { Details, Home, Products } from "./src/screens";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts.js";
import { SafeAreaView } from "react-native";
import styles from "./App.style.js";
export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [categorySelected, setCategorySelected] = useState("");
  const [productSelected, setProductSelected] = useState("");

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {productSelected ? (
        <Details
          product={productSelected}
          setProductSelected={setProductSelected}
          setCategorySelected={setCategorySelected}
        />
      ) : categorySelected ? (
        <Products
          category={categorySelected}
          setProductSelected={setProductSelected}
          setCategorySelected={setCategorySelected}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </SafeAreaView>
  );
}
