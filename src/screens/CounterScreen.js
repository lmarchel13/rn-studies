import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Counter: {counter}</Text>

      <Button title="INCREASE" onPress={() => setCounter(counter + 1)}></Button>
      <Button title="DECREASE" onPress={() => setCounter(counter - 1)}></Button>
    </View>
  );
};
