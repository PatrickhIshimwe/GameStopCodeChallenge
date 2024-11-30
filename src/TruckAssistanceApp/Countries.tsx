import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

interface Country {
    name: string;
    capital: string;
}

const Countries: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [searchedValue, setSearchedValue] = useState<string>('');
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const countryData = data.map((country: any) => ({
                    name: country.name.common,
                    capital: country.capital ? country.capital[0] : 'N/A',
                }));
                setCountries(countryData);
                setFilteredCountries(countryData);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleSearchedCountry = (searchedText: string) => {
        const filtered = countries.filter(country =>
            country.name.toLowerCase().includes(searchedText.toLowerCase())
        );
        setFilteredCountries(filtered);
        setSearchedValue(searchedText);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Countries and Capitals</Text>
            <TextInput
                placeholder={'Search for a country...'}
                style={styles.textInput}
                value={searchedValue}
                onChangeText={handleSearchedCountry}
            />
            {searchedValue.length > 0 && (
                <FlatList
                    data={filteredCountries}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.country}>{item.name}</Text>
                            <Text style={styles.capital}>Capital: <Text style={{color: 'red'}}>{item.capital}</Text></Text>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
};

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
        color: 'black',
        fontWeight: "bold",

    },
    textInput: {
        borderBottomWidth: 1,
        marginBottom: 20,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
});

export default Countries;
