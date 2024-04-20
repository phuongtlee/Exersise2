import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Profile from "./Profile";
import AppbarCustom from "./AppbarCustom";

export default function Excersise2() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ header: (props) => <AppbarCustom {...props} /> }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  );
}
