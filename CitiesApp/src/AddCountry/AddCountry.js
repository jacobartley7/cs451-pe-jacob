import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

const AddCountry = ({ addCountry }) => {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = () => {
    if (country && currency) {
      addCountry({ id: uuid.v4(), country, currency });
      setCountry('');
      setCurrency('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <TextInput
        style={styles.input}
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Country</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 12, fontSize: 16, padding: 8 },
  button: { backgroundColor: 'green', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18 },
});

export default AddCountry;
