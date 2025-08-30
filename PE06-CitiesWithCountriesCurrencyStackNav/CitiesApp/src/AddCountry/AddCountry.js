import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../theme';

export default class AddCountry extends React.Component {
  state = {
    name: '',
    currency: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    const { name, currency } = this.state;
    if (name === '' || currency === '') return;

    const country = {
      id: uuidv4(),
      name,
      currency,
    };

    this.props.addCountry(country);
    this.setState({ name: '', currency: '' });
    this.props.navigation.navigate('Countries');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Country name"
          onChangeText={(val) => this.onChangeText('name', val)}
          value={this.state.name}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Currency (e.g. Dollar, Yen)"
          onChangeText={(val) => this.onChangeText('currency', val)}
          value={this.state.currency}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: 'white',
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
