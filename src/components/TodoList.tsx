import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import AddNewTodo from './AddNewTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Pay bills', id: '1' },
    { text: 'Do your homework', id: '2' },
    { text: 'Walk the dog', id: '3' },
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, id: `${Math.random()}` }]);
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
      <AddNewTodo addTodo={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default TodoList;
