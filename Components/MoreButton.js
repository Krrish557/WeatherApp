import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Modal, ScrollView, Image } from "react-native";
import clock1 from "../assets/1clock.png";
import clock2 from "../assets/2clock.png";
import clock3 from "../assets/3clock.png";
import clock4 from "../assets/4clock.png";
import clock5 from "../assets/5clock.png";
import clock6 from "../assets/6clock.png";
import clock7 from "../assets/7clock.png";
import clock8 from "../assets/8clock.png";
import clock9 from "../assets/9clock.png";
import clock10 from "../assets/10clock.png";
import clock11 from "../assets/11clock.png";
import clock12 from "../assets/12clock.png";
import styles from "./StyleSheet";

const MoreButton = ({ daysData }) => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  useEffect(() => {
    const currentDate = new Date();
    let hours = currentDate.getHours();

    hours = hours % 12;
    hours = hours ? hours : 12;

    switch (hours) {
      case 1:
        setImage(clock1);
        break;
      case 2:
        setImage(clock2);
        break;
      case 3:
        setImage(clock3);
        break;
      case 4:
        setImage(clock4);
        break;
      case 5:
        setImage(clock5);
        break;
      case 6:
        setImage(clock6);
        break;
      case 7:
        setImage(clock7);
        break;
      case 8:
        setImage(clock8);
        break;
      case 9:
        setImage(clock9);
        break;
      case 10:
        setImage(clock10);
        break;
      case 11:
        setImage(clock11);
        break;
      case 12:
        setImage(clock12);
        break;
      default:
        setImage("");
        break;
    }
  }, []);

  if (!daysData || !Array.isArray(daysData) || daysData.length === 0) {
    return null;
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleFirstPage = () => {
    setCurrentPage(0);
  };

  const handleLastPage = () => {
    setCurrentPage(Math.ceil(daysData.length / itemsPerPage) - 1);
  };

  const renderDayData = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = daysData.slice(startIndex, endIndex);

    return paginatedData.map((day) => {
      // Convert temperature from Fahrenheit to Celsius
      const celsiusTemp = ((day.temp - 32) * 5) / 9;

      return (
        <View key={day.datetime} style={styles.dayContainer}>
          <Text style={styles.modalDate}>Date: {day.datetime}</Text>
          <Text style={styles.modalWind}>Wind Speed: {day.windspeed}</Text>
          <Text style={styles.modalCond}>Conditions: </Text>
          <Text style={styles.modalCondVal}>{day.conditions}</Text>

          <Text style={styles.modalHum}>Humidity: {day.humidity}</Text>
          <Text style={styles.modalTemp}>{celsiusTemp.toFixed(1)}°C</Text>
        </View>
      );
    });
  };

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
        <View
          style={{
            backgroundColor: "#96DFFF",
            display: "flex",
            flex: 1,
          }}
        >
          <Pressable
            style={{ alignSelf: "flex-start" }}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.modalBack}>⬅</Text>
          </Pressable>
          <Image
            source={image}
            style={{ width: 375, height: 375, zIndex: -9 }}
          />
          <ScrollView style={styles.modalScrollView}>
            {renderDayData()}
            <View style={styles.buttonContainer1}>
              <Pressable
                style={styles.modalNavButtons1}
                onPress={handlePrevPage}
                disabled={currentPage === 0}
              >
                <Text style={{ color: "white" }}>Previous</Text>
              </Pressable>
              <Pressable
                style={styles.modalNavButtons1}
                onPress={handleNextPage}
                disabled={
                  currentPage === Math.ceil(daysData.length / itemsPerPage) - 1
                }
              >
                <Text style={{ color: "white" }}>Next</Text>
              </Pressable>
            </View>
            <View style={styles.buttonContainer1}>
              <Pressable
                style={styles.modalNavButtons1}
                onPress={handleFirstPage}
                disabled={currentPage === 0}
              >
                <Text style={{ color: "white" }}>{"<<"}</Text>
              </Pressable>
              <Pressable
                style={styles.modalNavButtons1}
                onPress={handleLastPage}
                disabled={
                  currentPage === Math.ceil(daysData.length / itemsPerPage) - 1
                }
              >
                <Text style={{ color: "white" }}>&gt;&gt;</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default MoreButton;
