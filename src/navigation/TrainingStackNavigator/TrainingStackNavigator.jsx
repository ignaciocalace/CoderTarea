import { View } from "react-native";
import { Training } from "../../screens/index.js";
import { Header } from "../../components/index.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const TrainingStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Training"
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
      <Stack.Screen
        name="Training"
        component={Training}
        options={{ title: "Entrenamiento" }}
      />
    </Stack.Navigator>
  );
};
export default TrainingStackNavigator;
