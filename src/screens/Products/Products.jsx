import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import allProducts from "../../data/products";
import styles from "./Products.style.js";
import { Header, SearchInput } from "../../components";

const Products = ({ category, setProductSelected, setCategorySelected }) => {
  const [keyWord, setKeyWord] = useState("");

  const arrProducts = useMemo(() => {
    const filteredProducts = allProducts.filter((product) => {
      const lowerCaseTitle = product.title.toLowerCase();
      const lowerCaseKeyword = keyWord.toLowerCase();
      return (
        (!category || product.category === category) &&
        lowerCaseTitle.includes(lowerCaseKeyword)
      );
    });
    return filteredProducts;
  }, [category, keyWord]);

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyWord} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setProductSelected(item)}>
              <Text style={styles.textItem}>{item.title}</Text>
              <View style={styles.underline} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.buttonsNav}>
        <Pressable
          onPress={() => {
            setCategorySelected(null);
          }}
          style={[styles.button, styles.homeButton]}
        >
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Products;
