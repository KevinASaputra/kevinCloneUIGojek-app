import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function searchBar() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <Ionicons
          style={{ paddingStart: 10 }}
          name="ios-search"
          size={24}
          color="#a7a7a7"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Find service, Food, or Place"
        />
      </View>
      <FontAwesome
        style={{ paddingStart: 25 }}
        name="user-circle"
        size={34}
        color="white"
      />
    </View>
  );
}

export default searchBar;

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 40,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#007419",
  },
  inputContainer: {
    flexDirection: "row",
    width: "70%",
    height: 35,
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "white",
  },
  textInput: {
    paddingHorizontal: 10,
  },
});
