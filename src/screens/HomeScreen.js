import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const onPressButton = ({ navigation: { navigate } }, nav) => {
  console.log("onPressButton clicked to", nav);
  return navigate(nav);
};

const HomeScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => onPressButton(props, "Components")}
        title="Go to Components Screen"
      ></Button>
      <Button
        onPress={() => onPressButton(props, "List")}
        title="Go to List Screen"
      ></Button>
      <Button
        onPress={() => onPressButton(props, "Image")}
        title="Go to Image Screen"
      ></Button>
      <Button
        onPress={() => onPressButton(props, "Counter")}
        title="Go to Counter Screen"
      ></Button>
      <Button
        onPress={() => onPressButton(props, "Color")}
        title="Go to Color Screen"
      ></Button>
      <Button
        onPress={() => onPressButton(props, "ColorAdjuster")}
        title="Go to ColorAdjuster Screen"
      ></Button>
      <Button
        onPress={() => onPressButton(props, "Text")}
        title="Go to Text Screen"
      ></Button>
      <Button
        style={styles.buttonStyle}
        onPress={() => onPressButton(props, "Box")}
        title="Go to Box Screen"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 20, textAlign: "center" },
  viewStyle: {
    alignItems: "center"
  }
});

export default HomeScreen;
