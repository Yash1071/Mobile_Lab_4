import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ToDoForm from "./To_Do_Form";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, taskText.trim()]);
    }
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.taskItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontSize: 18,
  },
});
