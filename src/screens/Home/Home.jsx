import { FlatList, Text, View } from "react-native";

import { CategoryItem } from "./components";
import { Header } from "../../components";
import React from "react";
import categoriesData from "../../data/categoriesData";
import styles from "./Home.style";

const Home = ({ setCategorySelected }) => {
  return (
    <>
      <View style={styles.container}>
        <Header title={"Home"} />
        <Text style={styles.textHome}>Select a category: </Text>
        <FlatList
          data={categoriesData}
          keyExtractor={(category) => category}
          renderItem={({ item }) => (
            <CategoryItem
              category={item}
              setCategorySelected={setCategorySelected}
            />
          )}
        />
      </View>
    </>
  );
};

export default Home;
