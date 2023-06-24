import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

const slideItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="center" style={styles.image} />

      {/* <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.price}>{item.Price}</Text>
      </View> */}
    </View>
  );
};

export default slideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  image: {
    flex: 0.6,
    width: "100%",
  },
});
