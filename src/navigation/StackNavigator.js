import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Details, Products } from "../screens";
import { View } from "react-native";
import { Header } from "../components/index.js";
import Profile from "../screens/Profile/Profile.jsx";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        header: () => (
          <View>
            <Header title={route.name} navigation={navigation} route={route} />
          </View>
        ),
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

function StackNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: route.name === "Profile" ? true : false,
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
            if (route.name === "HomeStack") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
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
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
