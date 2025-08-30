import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
  static navigationOptions = {
    title: 'Countries',
  };

  render() {
    const { navigation, countries } = this.props;

    if (!countries.length) {
      return <CenterMessage message="No saved countries!" />;
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {countries.map((country) => (
          <TouchableOpacity
            key={country.id}
            onPress={() => navigation.navigate('Country', { country, countries })}
          >
            <View style={styles.countryContainer}>
              <Text style={styles.countryName}>{country.name}</Text>
              <Text style={styles.countryCurrency}>{country.currency}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  countryContainer: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  countryName: {
    fontSize: 20,
  },
  countryCurrency: {
    color: 'rgba(0,0,0,0.5)',
  },
});
