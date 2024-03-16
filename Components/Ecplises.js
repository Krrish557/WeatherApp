import { View, Text } from "react-native";
import styles from "./StyleSheet";

const Eclipse1 = () => {
  return (
    <View style={styles.eclipse1}>
      <Text style={styles.eclipse1Text}>24°</Text>
      <Text style={styles.eclipse1TextTitle}>Current{"\n"}Temperature</Text>
    </View>
  );
};

const Eclipse2 = () => {
  return (
    <View style={styles.eclipse2}>
      <Text style={styles.eclipse2Text}>26°</Text>
      <Text style={styles.eclipse2TextTitle}>Maximum{"\n"}Temperature</Text>
    </View>
  );
};
const Eclipse3 = () => {
  return (
    <View style={styles.eclipse3}>
      <Text style={styles.eclipse3Text}>26°</Text>
      <Text style={styles.eclipse3TextTitle}>Min{"\n"}Temp</Text>
    </View>
  );
};
export { Eclipse1, Eclipse2, Eclipse3 };
