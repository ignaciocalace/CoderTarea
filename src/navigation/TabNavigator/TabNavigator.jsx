import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "./TabNavigator.styles";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../../components/index.js";
import { colors } from "../../constants/colors.js";
import { Profile, MyRoutines } from "../../screens/index.js";
import HomeStack from "../HomeStackNavigator/HomeStackNavigator.jsx";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const myroutines = useSelector((state) => state.myroutines);

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: route.name !== "HomeStack",
        header: () => (
          <View>
            <Header title={route.name} navigation={navigation} route={route} />
          </View>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let showBadge = false;

          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "MyRoutines") {
            if (myroutines.length > 0) {
              iconName = focused ? "file-tray-full" : "file-tray-full-outline";
              showBadge = true;
            } else {
              iconName = "file-tray-full-outline";
            }
          }

          return (
            <View
              style={{
                width: size,
                height: size,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name={iconName} size={size} color={color} />
              {showBadge && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{myroutines.length}</Text>
                </View>
              )}
            </View>
          );
        },

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
        ],
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="MyRoutines" component={MyRoutines} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
