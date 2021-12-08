import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

interface IProps {
  addTodo: (text: string) => void;
}

const AddNewTodo = ({ addTodo }: IProps) => {
  const [todo, setTodo] = useState('');

  const onButtonPress = () => {
    addTodo(todo);
    setTodo('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={todo}
        onChangeText={(text) => setTodo(text)}
        style={styles.textInput}
      />

      <TouchableOpacity onPress={onButtonPress} style={styles.buttonContainer}>
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
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 15,
    padding: 5,
    margin: 5,
  },
});

export default AddNewTodo;
