import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface Country {
    name: string;
    capital: string;
}

interface AppState {
    countries: Country[];
}

class App extends Component<{}, AppState> {
    state: AppState = {
        countries: [],
    };

    componentDidMount() {
        this.fetchCountries();
    }

    fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const countryData = data.map((country: any) => ({
                name: country.name.common,
                capital: country.capital ? country.capital[0] : 'N/A',
            }));
            this.setState({ countries: countryData });
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    render() {
        const { countries } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Countries and Capitals</Text>
                <FlatList
                    data={countries}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.country}>{item.name}</Text>
                            <Text style={styles.capital}>Capital: {item.capital}</Text>
                        </View>
                    )}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    country: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    capital: {
        fontSize: 16,
        color: '#555',
    },
});

export default App;
