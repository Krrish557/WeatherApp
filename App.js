import React from "react";
import { StatusBar, View, Text } from "react-native";
import styles from "./Components/StyleSheet";
import { Eclipse1, Eclipse2, Eclipse3 } from "./Components/Ecplises";
import Rectangle from "./Components/Rectangle";

export default function App() {
  return (
    <View style={styles.container}>
      <Eclipse1 />
      <Eclipse2 />
      <Eclipse3 />
      <Rectangle />
      <StatusBar style="auto" />
    </View>
  );
}
