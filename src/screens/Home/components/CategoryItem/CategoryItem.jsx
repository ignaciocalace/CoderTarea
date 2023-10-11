import React from "react";
import { Card } from "../../../../components";
import { Text, TouchableOpacity } from "react-native";
import CategoryItemStyles from "./CategoryItem.styles.js";

const CategoryItem = ({ category, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Routines", { category })}
    >
      <Card style={CategoryItemStyles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryItem;
