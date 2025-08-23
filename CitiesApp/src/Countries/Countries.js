import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';

const Countries = ({ countries }) => (
  <ScrollView contentContainerStyle={styles.contentContainer}>
    {countries.length === 0 ? (
      <CenterMessage message="No saved countries!" />
    ) : (
      countries.map((country) => (
        <View key={country.id} style={styles.countryContainer}>
          <Text style={styles.country}>{country.country}</Text>
          <Text style={styles.currency}>Currency: {country.currency}</Text>
        </View>
      ))
    )}
  </ScrollView>
);

const styles = StyleSheet.create({
  contentContainer: { padding: 16 },
  countryContainer: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 12 },
  country: { fontSize: 20 },
  currency: { fontSize: 16, color: 'grey' },
});

export default Countries;
