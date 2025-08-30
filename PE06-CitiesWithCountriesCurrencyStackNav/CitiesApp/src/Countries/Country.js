import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Country extends React.Component {
  state = {
    name: '',
    info: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addCurrency = () => {
    const { addCurrency, country } = this.props.route.params;
    const { name, info } = this.state;

    if (name === '' || info === '') return;

    const currency = {
      id: uuidv4(),
      name,
      info,
    };

    addCurrency(currency, country);
    this.setState({ name: '', info: '' });
  };

  render() {
    const { countries, country } = this.props.route.params;
    const updatedCountry = countries.find((c) => c.id === country.id) || country;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!updatedCountry.currencies.length && { flex: 1 }]}>
          <View
            style={[
              styles.currenciesContainer,
              !updatedCountry.currencies.length && { flex: 1, justifyContent: 'center' },
            ]}
          >
            {!updatedCountry.currencies.length && (
              <CenterMessage message="No currencies for this country!" />
            )}
            {updatedCountry.currencies.map((currency) => (
              <View key={currency.id} style={styles.currencyContainer}>
                <Text style={styles.currencyName}>{currency.name}</Text>
                <Text style={styles.currencyInfo}>{currency.info}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <TextInput
          onChangeText={(val) => this.onChangeText('name', val)}
          placeholder="Currency name"
          value={this.state.name}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          onChangeText={(val) => this.onChangeText('info', val)}
          placeholder="Currency info"
          value={this.state.info}
          style={[styles.input, styles.input2]}
          placeholderTextColor="white"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addCurrency}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Currency</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  currenciesContainer: {
    paddingBottom: 104,
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0,
  },
  input2: {
    bottom: 52,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
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
  currencyContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  currencyName: {
    fontSize: 20,
  },
  currencyInfo: {
    color: 'rgba(0,0,0,0.5)',
  },
});
