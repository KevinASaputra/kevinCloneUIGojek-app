import React from "react";
import { Image, Text, View } from "react-native";
import { ChatIcon } from "../constans/icon";

function cardMenu() {
  return (
    <View>
      <ChatIcon style={{ backgroundColor: "green" }} width={20} height={20} />
    </View>
  );
}

export default cardMenu;
