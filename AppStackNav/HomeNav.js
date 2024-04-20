import { useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
export default function HomeNav({ navigation }) {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          <Text></Text>INFO
        </Button>
      ),
    });
  }, [count]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>count: {count}</Text>
      <Text>Home Screen</Text>
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate("Profile", {
            name: "jonh",
            age: 16,
          })
        }
      >
        <Text>Go to profile</Text>
      </Button>
    </View>
  );
}
