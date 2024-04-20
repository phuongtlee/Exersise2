import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Profile screen</Text>
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
