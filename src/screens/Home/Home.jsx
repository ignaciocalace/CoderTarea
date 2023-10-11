import React from "react";
import styles from "./Home.style";
import { CategoryItem } from "./components";
import { FlatList, Text, View } from "react-native";
import { useGetCategoriesQuery } from "../../services/workoutsApi.js";

const Home = ({ navigation }) => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHome}>Select a category: </Text>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={categories}
            keyExtractor={(category) => category}
            renderItem={({ item }) => (
              <CategoryItem category={item} navigation={navigation} />
            )}
          />
        )}
      </View>
    </>
  );
};

export default Home;
