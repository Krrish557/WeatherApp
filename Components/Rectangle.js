import { View, Text } from "react-native";
import styles from "./StyleSheet";
import MoreButton from "./MoreButton";
const Rectangle = ({ city, description, precProp, daysData }) => {
  return (
    <View style={styles.rect}>
      <Text style={styles.rectCityText}>{city}</Text>
      <Text style={styles.rectDescText}>{description}</Text>
      <Text style={styles.rectPrecProbText}>
        Precipitation Probability: {precProp}%
      </Text>
      <MoreButton daysData={daysData} />
    </View>
  );
};

export default Rectangle;
