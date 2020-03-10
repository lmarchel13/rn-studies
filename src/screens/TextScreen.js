import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter your name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => setName(text)}
        value={name}
      />
      <Text>Name: {name}</Text>
    </View>
  );
};
