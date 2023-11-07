import React from "react";
import styles from "./Loading.style";
import { ActivityIndicator, View } from "react-native";
const Loading = () => (
  <View style={[styles.container]}>
    <ActivityIndicator size="large" />
  </View>
);

export default Loading;
