import { Image, Text, View } from "react-native";
import React from "react";
import { Header } from "../../components/index.js";
import styles from "./Details.style.js";
const Details = ({ route }) => {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title} </Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{`$ ${product.price}`}</Text>
      </View>
    </View>
  );
};

export default Details;
