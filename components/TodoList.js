import { View, Text } from "react-native";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <View>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.index} />
      ))}
    </View>
  );
}
