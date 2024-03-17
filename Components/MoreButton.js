import React, { useState } from "react";
import { View, Text, Pressable, Modal, Button } from "react-native";
import styles from "./StyleSheet";

const MoreButton = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.button}>
      <Pressable onPress={() => setVisible(true)}>
        <Text>More</Text>
      </Pressable>
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContent}>
          <Text>Hello</Text>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default MoreButton;
