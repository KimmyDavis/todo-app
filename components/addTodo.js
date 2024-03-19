import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={(val) => setText(val)}
        style={styles.textInput}
        placeholder="e.g. Go to church"
      />
      <Button
        title="add"
        color="coral"
        onPress={() => {
          setText("");
          handleSubmit(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  textInput: {
    padding: 10,
    marginVertical: 10,
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 4,
    color: "#444",
  },
});
