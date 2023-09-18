import { View, Text } from "react-native";
import React from "react";
import styles from "./Profile.style";
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Username: userdefault</Text>
      <Text style={styles.detail}>Email: userdefault@example.com</Text>
      <Text style={styles.detail}>Birth date : 01/01/2000</Text>
    </View>
  );
};

export default Profile;
