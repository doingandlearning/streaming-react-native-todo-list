import { Text, View } from "react-native";

export default function Todo({ todo }) {
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  );
}
