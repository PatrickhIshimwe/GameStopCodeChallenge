import React from "react"
import { FlatList, View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import { CartContext } from "../contexts/CartContext"

export default class Cart extends React.Component<any> {
    static contextType = CartContext; context!: React.ContextType<typeof CartContext>

    proceedToCheckout = () => {
        this.props.navigation.navigate('Checkout', {cartItems: this.context.cartItems})
    }

    render() {
        return (
            <View style={styles.view}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ProductList')}>
                    <Text>Go back home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.context.clearProductFromCart}>
                    <Text>Clear Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.proceedToCheckout}>
                    <Text>Proceed to Checkout</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.context.cartItems}
                    keyExtractor={(index)=> index.toString()}
                    renderItem={({item}) =>
                        <Text>{item.product.name} -- {item.variation}</Text>
                    }
                />
            </View>
        )
    }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    view: {
        backgroundColor: '#4fb9af',
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        width: width,
        padding: 20,
    },
    button: {
        height: 42,
        width: '50%',
        marginBottom: 30,
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    }
})
