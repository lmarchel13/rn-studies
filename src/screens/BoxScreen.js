import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    alignItems: "stretch"
  },
  textStyle1: {
    borderWidth: 2,
    borderColor: "red",
    flex: 1
  },
  textStyle2: {
    borderWidth: 2,
    borderColor: "green",
    flex: 2
  },
  textStyle3: {
    borderWidth: 2,
    borderColor: "blue",
    flex: 1
  }
});

export default () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Child #1</Text>
      <Text style={styles.textStyle2}>Child #2</Text>
      <Text style={styles.textStyle3}>Child #3</Text>
    </View>
  );
};
