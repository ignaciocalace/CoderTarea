import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useState } from "react";
import styles from "./ProductsList.style.js";
import { SearchInput } from "../../components/index.js";
import allProducts from "../../data/products";

const ProductsList = ({
  navigation,
  route,
  products = [],
  showSearch = true,
}) => {
  const [keyWord, setKeyWord] = useState("");
  const category = route.params ? route.params.category : null;

  const filteredProducts = useMemo(() => {
    if (category) {
      return allProducts.filter((product) => {
        const lowerCaseTitle = product.title.toLowerCase();
        const lowerCaseKeyword = keyWord.toLowerCase();
        return (
          product.category === category &&
          lowerCaseTitle.includes(lowerCaseKeyword)
        );
      });
    } else {
      return products.filter((product) => {
        const lowerCaseTitle = product.title.toLowerCase();
        return lowerCaseTitle.includes(keyWord.toLowerCase());
      });
    }
  }, [products, category, keyWord]);

  return (
    <View style={styles.container}>
      {showSearch && <SearchInput onSearch={setKeyWord} />}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredProducts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { product: item })}
            >
              <Text style={styles.textItem}>{item.title}</Text>
              <View style={styles.underline} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default ProductsList;
