import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet} from "react-native";
const App = ()=>{
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text>CURRENT WEATHER</Text>
        <Text style={styles.temp}>Temperature : 6</Text>
        <Text style={styles.feels}>Feels Like : 7 </Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High : 5 </Text>
          <Text style={styles.highLow}> Low : 3</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    fontSize : 15
  },
  wrapper: {
    flex: 1,
    backgroundColor: "gold",
    alignItems: "center",
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
    flexDirection : 'row'
    
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
});
export default App