import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./components/ImageDetail";

const styles = StyleSheet.create({});

export default () => {
  const data = [
    { title: "Forest", source: "../../assets/forest.jpg" },
    { title: "Beach", source: "../../assets/beach.jpg" },
    { title: "Mountain", source: "../../assets/mountain.jpg" }
  ];

  return (
    <View>
      <ImageDetail
        title="Forest"
        imgSrc={require("../../assets/forest.jpg")}
      ></ImageDetail>
    </View>
  );
};
