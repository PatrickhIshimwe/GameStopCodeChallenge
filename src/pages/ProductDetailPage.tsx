import React from "react"
import {View, Image, Text, Dimensions, StyleSheet, TouchableOpacity} from "react-native"
import {CartContext} from "../contexts/CartContext"


export default class ProductDetailPage extends React.Component<any> {

    static contextType = CartContext; context!: React.ContextType<typeof CartContext>

    state = {
        selectedVariation: ''
    }

    handleAddToCart = () => {
        const { product } = this.props.route.params
        const { selectedVariation } = this.state
        this.context.addProductToCart(product, selectedVariation)
        this.props.navigation.navigate('Cart')
    }

    setSelectedVariation = (selectedVariation: string) => {
        this.setState({ selectedVariation})
    }

    render() {
        const { product } = this.props.route.params

        return (
            <View style={styles.view}>
                <View style={styles.itemView}>
                    <Image source={{ uri: product?.image }}/>
                    <Text>{product?.name}</Text>
                    <Text>{product?.details}</Text>
                    { product?.variations.map((variation: any, index: any) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => this.setSelectedVariation(variation)}
                            style={{
                                backgroundColor: this.state.selectedVariation === variation ? '#4fb9af' : 'grey',
                                padding: 10,
                                margin: 5,
                            }}
                        >
                            <Text style={{ color: 'white' }}>{variation}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleAddToCart} >
                    <Text>Add to Cart</Text>
                </TouchableOpacity>
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
    itemView: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 20,
        width: '80%',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    button: {
        height: 42,
        width: '50%',
        marginBottom: 30,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
})
