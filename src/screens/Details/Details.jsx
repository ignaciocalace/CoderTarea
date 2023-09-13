import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { Header } from "../../components/index.js";
import styles from "./Details.style.js";
const Details = ({ product, setProductSelected, setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <Header title="Details" />
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title} </Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{`$ ${product.price}`}</Text>
      </View>
      <View style={styles.buttonsNav}>
        <Pressable
          onPress={() => setProductSelected(null)}
          style={[styles.button, styles.backButton]}
        >
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setProductSelected(null);
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

export default Details;
