import { View } from "react-native";
import { Header } from "../../components/index.js";
import { Login, SignUp } from "../../screens/index.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        header: () => (
          <View>
            <Header navigation={navigation} route={route} />
          </View>
        ),
      })}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
