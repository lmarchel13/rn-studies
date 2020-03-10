import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({});

export default props => {
  console.log("props :", props);
  return (
    <View>
      <Text>{props.title}</Text>
      <Image source={props.imgSrc}></Image>
    </View>
  );
};
