import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "../../../../components";
import CategoryItemStyles from "./CategoryItem.styles.js";

const CategoryItem = ({ category, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Products", { category })}
    >
      <Card style={CategoryItemStyles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryItem;
