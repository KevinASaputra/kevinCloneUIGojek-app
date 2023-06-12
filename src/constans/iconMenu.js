import React from "react";
import { View, StyleSheet } from "react-native";
import { GoCarIcon, GoFoodIcon } from "./icon";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

function iconMenu() {
  return (
    <View style={styles.containerRoot}>
      <View style={styles.iconRoot}>
        <View style={styles.iconStyle}>
          <GoCarIcon />
        </View>
        <View style={styles.iconStyle}>
          <GoFoodIcon />
        </View>
        <View style={styles.iconStyle}>
          <GoFoodIcon />
        </View>
        <TouchableOpacity>
          <View style={styles.iconStyle}>
            <GoFoodIcon />
          </View>
          <Text>GoFood</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default iconMenu;

const styles = StyleSheet.create({
  containerRoot: {
    flexDirection: "column",
  },
  iconRoot: {
    marginStart: 20,
    marginTop: 25,
    padding: 10,
    flexDirection: "row",
  },
  iconStyle: {
    width: 60,
    height: 60,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 8,
  },
});
