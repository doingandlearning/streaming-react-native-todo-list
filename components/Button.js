import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export default function Button({ submit }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        underlayColor="#efefef"
        onPress={submit}
        style={styles.button}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ffffff",
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#666666",
    fontWeight: "600",
  },
});
