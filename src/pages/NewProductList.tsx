import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from "react-native";
import products from '../data/products.json';
import {StackScreenProps} from "@react-navigation/stack";

export type Product = {
    id: string,
    name: string,
    image: string,
    type: string,
    variations: string[],
    details: string
}

const ProductListPage = ({ navigation }: StackScreenProps<any>) => {
    const [searchedProduct, setSearchedProduct] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearchedProduct = (searchedProduct: string) => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchedProduct.toLowerCase())
        );
        setSearchedProduct(searchedProduct);
        setFilteredProducts(filtered);
    };

    return (
        <View  style={styles.view}>
            <TextInput
                style={styles.textInput}
                placeholder={'look up products...'}
                value={searchedProduct}
                onChangeText={handleSearchedProduct}
            />
            {searchedProduct.length > 0 && (
                <FlatList
                    data={filteredProducts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                navigation.navigate('ProductDetail', { product: item })
                            }
                        >
                            <Text style={styles.text}>{item.name}</Text>
                            <Image style={styles.image} source={{ uri: item.image }} />
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text>Add to Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    view: {
        backgroundColor: '#4fb9af',
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        width: width,
        padding: 20
    },
    textInput: {
        borderBottomWidth: 1,
        marginBottom: 20,
        width: '80%',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 2,

    },
    text: {
        fontSize: 16,
        marginBottom: 12
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ProductListPage;
