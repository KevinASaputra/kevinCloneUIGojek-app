import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DiscountScreen from "./src/screens/discountScreen";
import SaldoScreens from "./src/screens/saldoScreen";

export default function App() {
  return (
    <View style={styles.rootScreens}>
      <SaldoScreens />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreens: {
    flex: 1,
  },
});
