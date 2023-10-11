import { View } from "react-native";
import { Header } from "../../components/index.js";
import { Home, Details, RoutinesList } from "../../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const HomeStackNavigator = () => {
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
      <Stack.Screen name="Routines" component={RoutinesList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
