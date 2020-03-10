import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

const friends = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => ({ name: `Friend ${n}`, age: n }));

const ListScreen = () => {
  return (
    <FlatList
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  }
});

export default ListScreen;
