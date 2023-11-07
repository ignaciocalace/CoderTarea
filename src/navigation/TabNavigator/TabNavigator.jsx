import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "./TabNavigator.styles";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "../../screens/index.js";
import { Header } from "../../components/index.js";
import { colors } from "../../constants/colors.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyRoutinesStackNavigator from "../MyRoutinesNavigator/MyRoutinesNavigator.jsx";
import TrainingStackNavigator from "../TrainingStackNavigator/TrainingStackNavigator.jsx";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const myroutines = useSelector((state) => state.myRoutines);
  const currentTraining = useSelector((state) => state.currentTraining);

  const getTrainingStackBadge = () => {
    if (currentTraining) {
      return <Ionicons name="time" size={18} color={colors.secondary} />;
    }
    return null;
  };
  const getMyRoutinesStackBadge = () => {
    if (myroutines.length > 0) {
      return <Text style={styles.badgeText}>{myroutines.length}</Text>;
    }
    return null;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown:
          route.name !== "MyRoutinesStack" && route.name !== "TrainingStack",
        header: (props) => (
          <View>
            <Header
              title={props.options.title || route.name}
              navigation={navigation}
              route={route}
            />
          </View>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let showBadge = false;

          if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "MyRoutinesStack") {
            iconName = focused ? "file-tray-full" : "file-tray-full-outline";
            showBadge = myroutines.length > 0;
          } else if (route.name === "TrainingStack") {
            iconName = focused ? "barbell" : "barbell-outline";
            showBadge = currentTraining ? true : false;
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
            </View>
          );
        },

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: styles.tabBarContainer,
        tabBarLabelStyle: styles.tabBarLabel,
      })}
    >
      <Tab.Screen
        name="MyRoutinesStack"
        component={MyRoutinesStackNavigator}
        options={{
          title: "myRoutines",
          tabBarBadge: getMyRoutinesStackBadge(),
          tabBarBadgeStyle: styles.tabBarBadge,
        }}
      />
      <Tab.Screen
        name="TrainingStack"
        component={TrainingStackNavigator}
        options={{
          title: "Entrenamiento",
          tabBarBadge: getTrainingStackBadge(),
          tabBarBadgeStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
