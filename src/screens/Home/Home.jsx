import { FlatList, Text, View } from "react-native";
import { CategoryItem } from "./components";
import React from "react";
import categoriesData from "../../data/categoriesData";
import styles from "./Home.style";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHome}>Select a category: </Text>
        <FlatList
          data={categoriesData}
          keyExtractor={(category) => category}
          renderItem={({ item }) => (
            <CategoryItem category={item} navigation={navigation} />
          )}
        />
      </View>
    </>
  );
};

export default Home;
