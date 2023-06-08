import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

function saldoScreens() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.cardSaldo}>
        <View style={styles.title}>
          <Text style={styles.desinText}> Gopay </Text>
          <Text style={styles.desinText}> 200.000.000 </Text>
          <Text style={styles.history}> Tap For History </Text>
        </View>
      </View>
      <View style={styles.iconStyle}>
        <View style={styles.primaryIcon}>
          <Feather name="arrow-up-circle" size={24} color="white" />
          <Text style={styles.TextFitur}>Pay</Text>
        </View>
        <View style={styles.primaryIcon}>
          <AntDesign name="pluscircle" size={24} color="white" />
          <Text style={styles.TextFitur}>Top Up</Text>
        </View>
        <View style={styles.primaryIcon}>
          <Octicons name="feed-rocket" size={24} color="white" />
          <Text style={styles.TextFitur}>Eksplore</Text>
        </View>
      </View>
    </View>
  );
}

export default saldoScreens;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 20,
    backgroundColor: "#006dc6",
    flexDirection: "row",
    alignItems: "center",
  },
  cardSaldo: {
    alignItems: "flex-start",
    height: 75,
    width: "40%",
    borderRadius: 9,
    backgroundColor: "#ffffff",
  },
  title: {
    paddingTop: 6,
    paddingStart: 12,
  },
  desinText: {
    fontFamily: "",
    fontSize: 14,
    fontWeight: "bold",
    paddingTop: 1,
  },
  history: {
    fontSize: 12,
    color: "#00800f",
  },
  iconStyle: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  primaryIcon: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  TextFitur: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
});
