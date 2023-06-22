import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const windowWidth = Dimensions.get("window").width;

const images = [
  "../assets/banner.png",
  "../assets/banner.png",
  "../assets/banner.png",
];

function discountScreen() {
  const renderItem = ({ item }) => {
    return (
      <Image
        source={{ uri: item }}
        style={{ width: windowWidth, height: 300 }}
      />
    );
  };
  return (
    <View style={styles.rootContainer}>
      <Text style={{ color: "#ff0000", fontWeight: "bold", fontSize: 15 }}>
        Solusi mudah lunasi tagihan{" "}
      </Text>
      <View>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
        />
      </View>
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
