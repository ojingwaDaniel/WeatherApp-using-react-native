import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CURRENT WEATHER</Text>
      <View style={styles.wrapper}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>Temperature : 6</Text>
        <Text style={styles.feels}>Feels Like : 7 </Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High : 5 </Text>
          <Text style={styles.highLow}> Low : 3</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its perfect T-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    alignSelf: "center",
  },
  container: {
    backgroundColor: "gold",
    marginTop: StatusBar.currentHeight,
    flex: 1,
    fontSize: 15,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end", // move element to the bottom of the screen
    alignItems: "flex-start", // move to the extreme left
    paddingLeft: 20,
    marginBottom: 48,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;
