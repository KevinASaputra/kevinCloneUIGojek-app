import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Slides from "../data/data";
import SlideItem from "./slideItem";

const slider = () => {
  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default slider;

const styles = StyleSheet.create({});
