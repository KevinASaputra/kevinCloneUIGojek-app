import { StyleSheet, Text, View } from "react-native";
import React from "react";

const pagination = ({ data }) => {
  return (
    <View>
      {data.map((_, idx) => {
        return <View key={idx.toString} style={styles.dat} />;
      })}
    </View>
  );
};

export default pagination;

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#ccc",
  },
});
