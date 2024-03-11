import { useState } from "react";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [tasks, setTasks] = useState([
    "Do laundry",
    "Go for a walk",
    "Walk the dog",
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
