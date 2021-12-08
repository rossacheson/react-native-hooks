import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoList from './src/components/TodoList';

const App = () => {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
