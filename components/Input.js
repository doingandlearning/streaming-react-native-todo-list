import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Input({ text, setText }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="What do you want to do?"
        placeholderTextColor="#CACACA"
        selectionColor="#666666"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
  },
  input: {
    height: 60,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
