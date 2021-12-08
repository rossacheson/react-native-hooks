import React, { useEffect, useState } from 'react';
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

  const [count, setCount] = useState(0);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, id: `${Math.random()}` }]);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('useEffect todos', todos);
  }, [todos]); // second argument limits when the effect will run, in this case when todos changes

  useEffect(() => {
    console.log('useEffect count', count);
  }, [count]);

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
      <TouchableOpacity onPress={incrementCount} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Add Score: {count}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 10,
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
