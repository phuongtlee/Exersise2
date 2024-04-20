import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Profile from "./Profile";


export default function Home({ navigation }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Home screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate(Profile)}>
        <Text>Go to Profile</Text>
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
