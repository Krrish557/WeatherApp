import React, { useState, useEffect } from "react";
import { StatusBar, View } from "react-native";
import styles from "./Components/StyleSheet";
import Rectangle from "./Components/Rectangle";
import { CurrTemp, MaxTemp, MinTemp } from "./Components/Eclipses";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const today = new Date().toISOString().slice(0, 10);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/chandigarh?key=PLMTUPX7KKW5JE73L3YN2Z5XS`
        );
        if (!weatherResponse.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const weatherData = await weatherResponse.json();
        setWeatherData(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, []);

  const getMaxTempForToday = () => {
    if (!weatherData || !weatherData.days) return null;

    const todayData = weatherData.days.find((day) => day.datetime === today);

    if (!todayData) return null;
    const inCel = ((todayData.tempmax - 32) * 5) / 9;
    return inCel.toFixed(1);
  };
  const getMinTempForToday = () => {
    if (!weatherData || !weatherData.days) return null;

    const todayData = weatherData.days.find((day) => day.datetime === today);

    if (!todayData) return null;
    const inCel = ((todayData.tempmin - 32) * 5) / 9;
    return inCel.toFixed(1);
  };
  const getCurrentTemperature = () => {
    if (!weatherData || !weatherData.days) return null;

    const todayData = weatherData.days.find((day) => day.datetime === today);

    if (!todayData || !todayData.hours) return null;

    const currentTimestamp = new Date().getTime() / 1000;

    let closestHour = todayData.hours.reduce((prev, curr) =>
      Math.abs(curr.datetimeEpoch - currentTimestamp) <
      Math.abs(prev.datetimeEpoch - currentTimestamp)
        ? curr
        : prev
    );
    const inCel = ((closestHour.temp - 32) * 5) / 9;
    return inCel.toFixed(1);
  };
  const getPrecProb = () => {
    if (!weatherData || !weatherData.days) return null;

    const todayData = weatherData.days.find((day) => day.datetime === today);

    if (!todayData || !todayData.hours) return null;

    const currentTimestamp = new Date().getTime() / 1000;

    let closestHour = todayData.hours.reduce((prev, curr) =>
      Math.abs(curr.datetimeEpoch - currentTimestamp) <
      Math.abs(prev.datetimeEpoch - currentTimestamp)
        ? curr
        : prev
    );
    return closestHour.precipprob;
  };
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <View style={styles.container}>
      <CurrTemp temperature={getCurrentTemperature()} />
      <MaxTemp temperature={getMaxTempForToday()} />
      <MinTemp temperature={getMinTempForToday()} />
      <Rectangle
        city={weatherData ? capitalizeFirstLetter(weatherData["address"]) : ""}
        description={weatherData ? weatherData["description"] : ""}
        precProp={getPrecProb()}
        daysData={weatherData ? weatherData["days"] : ""}
      />

      <StatusBar style="auto" />
    </View>
  );
}
