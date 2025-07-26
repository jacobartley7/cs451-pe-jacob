import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Heading from '../../components/ui/Heading';
import Input from '../../components/ui/Input';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosScreen() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');

  const inputChange = (text: string) => {
    setInputValue(text);
  };

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      title: inputValue.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
  });

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.scroll}>
        <Heading />
        <View style={styles.todoCard}>
          <Input inputValue={inputValue} inputChange={inputChange} />

          {filteredTodos.map((todo) => (
            <View key={todo.id} style={styles.todoItem}>
              <Text
                style={[
                  styles.todoText,
                  todo.completed && { textDecorationLine: 'line-through' },
                ]}
              >
                {todo.title}
              </Text>
              <TouchableOpacity
                style={styles.doneButton}
                onPress={() => toggleComplete(todo.id)}
              >
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTodo(todo.id)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.submitBox}>
          <TouchableOpacity onPress={addTodo} style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.filterBar}>
        {['All', 'Active', 'Completed'].map((type) => (
          <TouchableOpacity key={type} onPress={() => setFilter(type as any)} style={styles.filterButton}>
            <Text style={[styles.filterText, filter === type && styles.selectedFilter]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f9f4',
  },
  scroll: {
    paddingTop: 60,
    paddingBottom: 80,
  },
  todoCard: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  doneButton: {
    backgroundColor: '#e0f7e9',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 5,
  },
  doneText: {
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#fdecea',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  deleteText: {
    color: '#c62828',
    fontWeight: 'bold',
  },
  submitBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  submitText: {
    color: '#000',
    fontWeight: '600',
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  filterButton: {
    flex: 1,
    alignItems: 'center',
  },
  filterText: {
    color: '#777',
  },
  selectedFilter: {
    fontWeight: 'bold',
    color: '#333',
  },
});
