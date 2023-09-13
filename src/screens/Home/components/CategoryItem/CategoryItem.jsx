import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { Card } from "../../../../components";
import CategoryItemStyles from "./CategoryItem.styles.js";

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <TouchableOpacity onPress={() => setCategorySelected(category)}>
      <Card style={CategoryItemStyles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryItem;
