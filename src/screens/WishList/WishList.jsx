import React from "react";
import { useSelector } from "react-redux";
import styles from "./WishList.style";
import ProductsList from "../ProductsList/ProductsList.jsx";
import { View } from "react-native";

const WishList = ({ navigation, route }) => {
  const wishlistProducts = useSelector((state) => state.wishlist);

  return (
    <View style={styles.container}>
      <ProductsList
        products={wishlistProducts}
        showSearch={false}
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default WishList;
