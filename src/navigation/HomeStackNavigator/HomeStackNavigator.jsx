import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Details, ProductsList } from "../../screens";
import { View } from "react-native";
import { Header } from "../../components/index.js";

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
      <Stack.Screen name="Products" component={ProductsList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
