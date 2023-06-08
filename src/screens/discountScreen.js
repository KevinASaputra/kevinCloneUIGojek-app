import React from "react";
import { StyleSheet, Text, View } from "react-native";

function discountScreen() {
  return (
    <View style={styles.container}>
      <Text>test</Text>
    </View>
  );
}

export default discountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 100,
  },
});
