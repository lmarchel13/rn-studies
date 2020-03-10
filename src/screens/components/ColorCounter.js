import React from "react";
import { View, Button, Text } from "react-native";

const MIN_VALUE = 0;
const MAX_VALUE = 255;
const COLOR_ADJUST_VALUE = 10;

export default ({ colorName, cb, counter }) => {
  const type = `CHANGE_${colorName.toLowerCase()}`;

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ textAlign: "center" }}>{colorName}</Text>
      <Button
        title="Increase"
        onPress={() => {
          if (counter + COLOR_ADJUST_VALUE > MAX_VALUE) return;
          cb({ type, payload: COLOR_ADJUST_VALUE });
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          if (counter - COLOR_ADJUST_VALUE < MIN_VALUE) return;
          cb({ type, payload: -1 * COLOR_ADJUST_VALUE });
        }}
      ></Button>
    </View>
  );
};
