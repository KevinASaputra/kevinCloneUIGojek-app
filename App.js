import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DiscountScreen from "./src/screens/discountScreen";
import SaldoCard from "./src/components/saldoCard";

export default function App() {
  return (
    <View style={styles.rootScreens}>
      <SaldoCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreens: {
    flex: 1,
  },
});
