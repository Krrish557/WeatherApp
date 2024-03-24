import React from "react";
import { View, Text } from "react-native";
import styles from "./StyleSheet";

const CurrTemp = ({ temperature }) => {
  return (
    <View style={styles.currTemp}>
      <Text style={styles.currTempText}>{temperature}°</Text>
      <Text style={styles.currTempTextTitle}>Current{"\n"}Temperature</Text>
    </View>
  );
};

const MaxTemp = ({ temperature }) => {
  return (
    <View style={styles.maxTemp}>
      <Text style={styles.maxTempText}>{temperature}°</Text>
      <Text style={styles.maxTempTextTitle}>Maximum{"\n"}Temperature</Text>
    </View>
  );
};

const MinTemp = ({ temperature }) => {
  return (
    <View style={styles.minTemp}>
      <Text style={styles.minTempText}>{temperature}°</Text>
      <Text style={styles.minTempTextTitle}>Minimum{"\n"}Temp</Text>
    </View>
  );
};

export { CurrTemp, MaxTemp, MinTemp };
