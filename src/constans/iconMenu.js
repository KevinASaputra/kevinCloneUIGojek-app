import React from "react";
import {
  View,
  StyleSheet,
  ProgressBarAndroidBase,
  ProgressBarAndroidComponent,
} from "react-native";
import { GoCarIcon, GoFoodIcon, GoRIdeIcon, GosendIcon } from "./icon";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native";
import ProgressBar from "react-native-progress/Bar";

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
      <View style={styles.rootPoint}>
        <TouchableOpacity>
          <AntDesign name="right" marginEnd={8} size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.contentPoint}>
          <Text>100 XP to your treasure</Text>
          <ProgressBar
            width={160}
            progress={0.4}
            color="#187700"
            marginVertical={10}
            borderColor="#ffffff"
            elevation={1}
            borderWidth={1}
          />
          <Text>Hi, welcome to GoClub!</Text>
        </View>
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
  rootPoint: {
    marginTop: 30,
    margin: 20,
    padding: 10,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  contentPoint: {
    marginEnd: 50,
    alignItems: "center",
  },
  contentLine: {},
});
