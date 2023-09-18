import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useState } from "react";
import allProducts from "../../data/products";
import styles from "./Products.style.js";
import { Header, SearchInput } from "../../components";

const Products = ({ navigation, route }) => {
  const [keyWord, setKeyWord] = useState("");
  const { category } = route.params;
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
      <SearchInput onSearch={setKeyWord} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { product: item })}
            >
              <Text style={styles.textItem}>{item.title}</Text>
              <View style={styles.underline} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Products;
