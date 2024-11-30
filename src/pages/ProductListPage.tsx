// import React from "react"
// import {Dimensions, FlatList, StyleSheet, TextInput, TouchableOpacity, View, Text, Image, Alert} from "react-native"
// import products from '../data/products.json'
// import {log} from "expo/build/devtools/logger";
//
// export type Product = {
//     id: string,
//     name: string,
//     image: string,
//     type: string,
//     variations: string[],
//     details: string
// }
//
// export default class ProductListPage extends React.Component<any> {
//     state = {
//         searchedProduct: '',
//         filteredProducts: products
//     }
//
//     handleSearchedProduct = (searchedProduct: string) => {
//         const filteredProducts = products.filter(product =>
//             product.name.toLowerCase().includes(searchedProduct.toLowerCase())
//         )
//         this.setState({searchedProduct, filteredProducts})
//     }
//
//     render() {
//         const {searchedProduct, filteredProducts} = this.state
//
//         return (
//             <View style={styles.view}>
//                 <TextInput
//                     style={styles.textInput}
//                     placeholder={'look up products...'}
//                     value={searchedProduct}
//                     onChangeText={this.handleSearchedProduct}
//                 />
//                 {searchedProduct.length > 0 && (
//                     <FlatList
//                         data={filteredProducts}
//                         keyExtractor={item => item.id}
//                         renderItem={({item}) => (
//                             <TouchableOpacity
//                                 style={styles.button}
//                                 onPress={() =>
//                                     this.props.navigation.navigate('ProductDetail', {product: item})
//                                 }
//                             >
//                                 <Text style={styles.text}>{item.name}</Text>
//                                 <Image style={styles.image} source={{uri: item.image}} />
//                                 <TouchableOpacity style={styles.button} onPress={() => Alert.prompt('wow', 'hello', text => console.log(text))}>
//                                     <Text>Add to Cart</Text>
//                                 </TouchableOpacity>
//                             </TouchableOpacity>
//                         )}
//                     />
//                 )}
//             </View>
//         )
//     }
// }
//
// const { height, width } = Dimensions.get('window')
// const styles = StyleSheet.create({
//     view: {
//         backgroundColor: '#4fb9af',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: height,
//         width: width,
//         padding: 20
//     },
//     textInput: {
//         borderBottomWidth: 1,
//         marginBottom: 20,
//         width: '80%',
//         textAlign: 'center',
//         backgroundColor: 'white',
//         padding: 10,
//     },
//     text: {
//         fontSize: 16,
//         marginBottom: 12
//     },
//     image: {
//         width: 100,
//         height: 100,
//         marginBottom: 10,
//     },
//     button: {
//         backgroundColor: 'white',
//         padding: 20,
//         marginVertical: 10,
//         borderRadius: 8,
//         borderWidth: 1,
//         width: width * 0.8,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// })

// Function version


import React, {useEffect, useState} from "react";
import {View, Image, Text, Dimensions, TextInput, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import Products from '../data/products.json'
import { StackScreenProps } from '@react-navigation/stack';


export type Product = {
    id: string,
    name: string,
    image: string,
    type: string,
    variations: string[],
    details: string
}


function ProductListPage({navigation}: StackScreenProps<any>) {
    const [ searchedProduct, setSearchedProduct ] = useState('')
    const [ filteredProducts, setFilteredProducts ] = useState(Products)


    useEffect(() => {
        console.log('here', searchedProduct)
    }, [searchedProduct])

    const filteredProduct = (searchedProduct: string) => {
        const filtered: Product[] = Products.filter(product =>
            product.name.toLowerCase().includes(searchedProduct.toLowerCase())
        )
        setSearchedProduct(searchedProduct)
        setFilteredProducts(filtered)
    }

    return (
        <View style={styles.view}>
            <TextInput
                style={styles.textInput} testID='textInput'
                placeholder={'lookup products ...'}
                value={searchedProduct}
                onChangeText={filteredProduct}
            />
            {searchedProduct.length > 0 && (
                <FlatList data={filteredProducts}
                          keyExtractor={item => item.id}
                          renderItem={({item}) => (
                              <TouchableOpacity style={styles.button}
                                                onPress={() => {
                                                    navigation.navigate('ProductDetail', {product: item})
                                                    setSearchedProduct('')
                                                }}
                              >
                                  <Text style={styles.text}> {item.name} </Text>
                                  <Image style={styles.image} source={{ uri : item.image }} />
                                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                                      <Text>Add to Cart</Text>
                                  </TouchableOpacity>
                              </TouchableOpacity>
                          )}
                />
            )}
        </View>
    )
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    view: {
        backgroundColor: '#4fb9af',
        alignItems: 'center',
        justifyContent: 'center',
        height,
        width,
        padding: 20
    },
    textInput: {
        borderBottomWidth: 1,
        marginBottom: 20,
        width: '80%',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 10,
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
})

export default ProductListPage
