import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerBg}>
      <Text style={styles.headerText}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBg: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "coral",
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});
