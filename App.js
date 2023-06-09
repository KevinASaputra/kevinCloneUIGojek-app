import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DiscountScreen from "./src/screens/discountScreen";
import SaldoCard from "./src/components/saldoCard";
import SearchBar from "./src/components/searchBar";
import CardMenu from "./src/components/cardMenu";

export default function App() {
  return (
    <View style={styles.rootScreens}>
      <SearchBar />
      <SaldoCard />
      <View style={styles.menuGojek}>
        <CardMenu />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreens: {
    flex: 1,
  },
  menuGojek: {
    padding: 100,
    backgroundColor: "#ffffff",
  },
});
