import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const TodoList = () => {
  const todos = [
    { text: 'Pay bills', id: '1' },
    { text: 'Do your homework', id: '2' },
    { text: 'Walk the dog', id: '3' },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          return <Text>{item.text}</Text>;
        }}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default TodoList;
