import { createStackNavigator } from "@react-navigation/stack";
import HomeNav from "./HomeNav";
import ProfileNav from "./ProfileNav";
import { Avatar, Icon } from "react-native-paper";

const stack = createStackNavigator();

const Logo = ()=>{
    return(
        <Avatar.Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} 
        size={40}/>
    )
}

export default function MyStack() {
  return (
    <stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: "Home screen",
        headerStyle: {
          backgroundColor: "pink",
        },
        // headerRight: () => <Icon source={"home"} size={40} color="black" />,
        headerLeft:()=><Logo/>
      }}
    >
      <stack.Screen
        name="Home"
        component={HomeNav}
        // options={{
        //   title: "Home screen",
        //   headerStyle: {
        //     backgroundColor: "pink",
        //   },
        //   headerRight: () => <Icon source={"home"} size={40} color="black" />,
        // }}
      />
      <stack.Screen name="Profile" component={ProfileNav} />
    </stack.Navigator>
  );
}
