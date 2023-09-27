import { Image, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./Details.style.js";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
} from "../../features/wishList/wishListSlice.js";

const Details = ({ route }) => {
  const { product } = route.params;

  const wishlist = useSelector((state) => state.wishlist);
  const isProductInWishlist = wishlist.some((item) => item.id === product.id);

  const [isAddedToWishlist, setIsAddedToWishlist] =
    useState(isProductInWishlist);
  const dispatch = useDispatch();

  const handleWishlist = () => {
    if (isAddedToWishlist) {
      dispatch(removeProduct(product));
    } else {
      dispatch(addProduct(product));
    }
    setIsAddedToWishlist(!isAddedToWishlist);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{`$ ${product.price}`}</Text>
        <TouchableOpacity onPress={handleWishlist} style={styles.heartIcon}>
          <Ionicons
            name={isAddedToWishlist ? "heart" : "heart-outline"}
            size={24}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
