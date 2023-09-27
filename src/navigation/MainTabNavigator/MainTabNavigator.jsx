import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Header } from "../../components/index.js";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors.js";
import HomeStack from "../HomeStackNavigator/HomeStackNavigator.jsx";
import { Profile, WishList } from "../../screens/index.js";
import { useSelector } from "react-redux";
import styles from "./MainTabNavigator.styles";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: route.name !== "HomeStack",
          header: () => (
            <View>
              <Header
                title={route.name}
                navigation={navigation}
                route={route}
              />
            </View>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let showBadge = false;

            if (route.name === "HomeStack") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "WishList") {
              if (wishlist.length > 0) {
                iconName = focused ? "heart" : "heart-outline";
                showBadge = true;
              } else {
                iconName = "heart-outline";
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
                    <Text style={styles.badgeText}>{wishlist.length}</Text>
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
        <Tab.Screen name="WishList" component={WishList} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
