import { View, Text } from "react-native";
import styles from "./StyleSheet";
import Button from "./Button";
const Rectangle = () => {
  return (
    <View style={styles.rect}>
      <Text style={styles.rectCityText}>Chandigarh</Text>
      <Text style={styles.rectDescText}>Warming up with no rain expected</Text>
      <Text style={styles.rectPrecProbText}>
        Precipitation Probability: 32.3%
      </Text>
      <Button />
    </View>
  );
};

export default Rectangle;
