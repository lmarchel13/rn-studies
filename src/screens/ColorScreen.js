import React, { useState } from "react";
import { View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const generateNumber = () => Math.floor(Math.random() * 255);

const randomRGB = () =>
  `rgb(${generateNumber()},${generateNumber()},${generateNumber()})`;

export default () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      ></Button>
      <FlatList
        data={colors}
        keyExtractor={item => item}
        renderItem={({ item: backgroundColor }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor
              }}
            ></View>
          );
        }}
      ></FlatList>
      {/* {colors.map(backgroundColor => {
        
        );
      })} */}
    </View>
  );
};
