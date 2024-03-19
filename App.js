import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Alert,
} from "react-native";
import Header from "./components/header";
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Do cs50", key: "1" },
    { text: "Do the projects", key: "2" },
    { text: "Finish the kampa projects", key: "3" },
    { text: "Complete my portfolio", key: "4" },
  ]);

  function handlePress(key) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.key != key);
    });
  }
  function handleSubmit(text) {
    if (text.length > 3) {
      setTodos((currentTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...currentTodos];
      });
    } else {
      Alert.alert(
        "Sorry!",
        "You must have atleast three letters in your todo",
        [
          {
            text: "ok",
            onPress: () => {
              console.log("good!");
            },
          },
        ]
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <AddTodo handleSubmit={handleSubmit} />
        <TodoList todos={todos} handlePress={handlePress} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0ff",
  },
});
