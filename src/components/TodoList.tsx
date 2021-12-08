import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Touchable,
} from 'react-native';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Pay bills', id: '1' },
    { text: 'Do your homework', id: '2' },
    { text: 'Walk the dog', id: '3' },
  ]);

  const addTodo = () => {
    setTodos([...todos, { text: 'Learn Hooks', id: `${Math.random()}` }]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          return <Text>{item.text}</Text>;
        }}
        keyExtractor={(todo) => todo.id}
      />
      <TouchableOpacity onPress={addTodo} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  buttonContainer: {
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default TodoList;
