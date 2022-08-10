import React from "react";

import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Heading from "./components/Heading";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import TabBar from "./components/TabBar";

export default function App() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [todoIndex, setTodoIndex] = React.useState(1);

  const submitTodo = () => {
    if (text.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: text,
      todoIndex,
      complete: false,
    };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodoIndex(todoIndex + 1);
    setText("");
  };

  // TabBar
  // Persist to localStorage -> what's the RN story?
  // API request/response cycle

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Heading />
        <Input text={text} setText={setText} />
        <Button submit={submitTodo} />
        <TodoList todos={todos} />
        {/* <TabBar /> */}
      </ScrollView>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
