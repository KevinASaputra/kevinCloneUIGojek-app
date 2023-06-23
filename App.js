import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DiscountScreen from "./src/screens/discountScreen";
import SaldoCard from "./src/components/saldoCard";
import SearchBar from "./src/components/searchBar";
import CardMenu from "./src/components/cardMenu";
import { ChatIcon } from "./src/constans/icon";

export default function App() {
  return (
    <>
      <View style={styles.rootScreens}>
        <SearchBar />
        <SaldoCard />
        <View>
          <CardMenu />
        </View>
        <View>
          <DiscountScreen />
        </View>
        <StatusBar style="auto" />
      </View>
    </>
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
