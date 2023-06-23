import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const slideItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="repeat" style={styles.image} />

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
  container: {},
  image: {
    flex: 0.6,
    width: "70%",
  },
  // content: {
  //   flex: 0.4,
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "#333",
  // },
  // description: {
  //   fontSize: 18,
  //   marginVertical: 12,
  //   color: "#333",
  // },
  // price: {
  //   fontSize: 32,
  //   fontWeight: "bold",
  // },
});
