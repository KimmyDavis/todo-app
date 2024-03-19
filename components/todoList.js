import React from "react";
import { StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ({ todos, handlePress }) {
  return (
    <FlatList
      style={styles.container}
      data={todos}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.todoParent}>
          <Text style={styles.text}>{item.text}</Text>
          <MaterialIcons onPress={() => handlePress(item.key)} name="delete" />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 10,
  },
  todoParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#0003",
    borderColor: "coral",
    borderWidth: 1,
  },
  text: {
    marginRight: "auto",
  },
});
