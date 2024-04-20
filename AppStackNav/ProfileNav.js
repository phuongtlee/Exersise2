import { Text, View } from "react-native";
import { Button } from "react-native-paper";
export default function ProfileNav({ navigation, route }) {
  const { name, age } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello {name}</Text>
      <Text>
        {name}'s {age} year old
      </Text>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
    </View>
  );
}
