import React from "react";
import { StyleSheet, Text, View } from "react-native";

function discountScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={{ color: "#ff0000", fontWeight: "bold", fontSize: 15 }}>
        Solusi mudah lunasi tagihan{" "}
      </Text>
    </View>
  );
}

export default discountScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    marginStart: 15,
    marginTop: 50,
  },
});
