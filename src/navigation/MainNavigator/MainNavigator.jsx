import React from "react";
import { useSelector } from "react-redux";
import TabNavigator from "../TabNavigator/TabNavigator.jsx";
import AuthStackNavigator from "../AuthStackNavigator/AuthStackNavigator.jsx";

const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.auth);

  return user ? <TabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
