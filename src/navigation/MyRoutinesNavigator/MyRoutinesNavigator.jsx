import { View } from "react-native";
import { Header } from "../../components/index.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DefRoutinesLoader,
  Details,
  MyRoutines,
  RoutineInput,
  RoutinesList,
} from "../../screens";

const Stack = createNativeStackNavigator();
const MyRoutinesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyRoutines"
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        header: (props) => (
          <View>
            <Header
              title={props.options.title || route.name}
              navigation={navigation}
              route={route}
            />
          </View>
        ),
      })}
    >
      <Stack.Screen name="MyRoutines" component={MyRoutines} />
      <Stack.Screen
        name="RoutineInput"
        component={RoutineInput}
        options={{ title: "Crear Rutina" }}
      />
      <Stack.Screen
        name="RoutineList"
        component={RoutinesList}
        options={{ title: "Rutinas Predeterminadas" }}
      />
      <Stack.Screen
        name="DefRoutinesLoader"
        component={DefRoutinesLoader}
        options={{ title: "Rutinas" }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: "Rutina" }}
      />
    </Stack.Navigator>
  );
};
export default MyRoutinesStackNavigator;
