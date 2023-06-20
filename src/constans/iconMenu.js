import React from "react";
import { View, StyleSheet } from "react-native";
import { GoCarIcon, GoFoodIcon, GoRIdeIcon, GosendIcon } from "./icon";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

function iconMenu() {
  return (
    <View style={styles.containerRoot}>
      <View style={styles.iconRoot}>
        <TouchableOpacity>
          <View style={styles.iconStyle}>
            <GoRIdeIcon />
          </View>
          <Text style={{ marginHorizontal: 10 }}>GoCar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconStyle}>
            <GoCarIcon />
          </View>
          <Text style={{ marginHorizontal: 4 }}>GoSend</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconStyle}>
            <GoFoodIcon />
          </View>
          <Text style={{ marginHorizontal: 6 }}>GoRide</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconStyle}>
            <GosendIcon />
          </View>
          <Text style={{ marginHorizontal: 5 }}>GoFood</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconRoot2}>
        <TouchableOpacity>
          <View style={styles.iconStyle}>
            <GoCarIcon />
          </View>
          <Text style={{ marginHorizontal: 10 }}>GoCar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconStyle}>
            <GoFoodIcon />
          </View>
          <Text style={{ marginHorizontal: 4 }}>GoSend</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconStyle}>
            <GoFoodIcon />
          </View>
          <Text style={{ marginHorizontal: 6 }}>GoRide</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconStyle}>
            <GoFoodIcon />
          </View>
          <Text style={{ marginHorizontal: 5 }}>GoFood</Text>
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
  iconRoot2: {
    marginStart: 20,
    marginTop: 2,
    flexDirection: "row",
    padding: 10,
  },
  iconStyle: {
    width: 60,
    height: 60,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 12,
  },
});
