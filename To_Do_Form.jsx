import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText(""); // Clear input after adding
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});
