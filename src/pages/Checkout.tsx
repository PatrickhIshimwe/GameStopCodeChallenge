import React from "react"
import {Dimensions, FlatList, StyleSheet, Text, TextInput, View} from "react-native"
import {CartContext} from "../contexts/CartContext"


export default class CheckoutPage extends React.Component<any> {

    static contextType = CartContext; context!: React.ContextType<typeof CartContext>

    state = {
        name: '',
        phone: '',
        address: '',
        creditCard: '',
        phoneNumberError: ''
    }

    validatePhone = (phone: string) => {
        const phoneRegex = /^[0-9]{10}$/
        if (!phoneRegex.test(phone)) {
            this.setState({ phoneNumberError: 'Invalid phone number' })
        } else {
            this.setState({ phoneNumberError: '' })
        }
    }

    handleChange = (name: string, value: string) => {
        this.setState({ [name]: value})
        if (name === 'phone') {
            this.validatePhone(value)
        }
    }

    render() {
        const {name, phone, address, creditCard, phoneNumberError} = this.state

        return (
            <View style={styles.view}>
                <TextInput
                    placeholder={'Name'}
                    style={styles.textInput}
                    onChangeText={value => this.handleChange('name', value)}
                    value={name}
                />
                <TextInput
                    placeholder={'Phone'}
                    style={styles.textInput}
                    onChangeText={value => this.handleChange('phone', value)}
                    value={phone}
                />
                { phoneNumberError ? <Text>{phoneNumberError}</Text> : null }
                <TextInput
                    placeholder='Shipping Address'
                    style={styles.textInput}
                    onChangeText={value => this.handleChange('address', value)}
                    value={address}
                />
                <TextInput
                    placeholder='Credit Card'
                    keyboardType={'phone-pad'}
                    style={styles.textInput}
                    onChangeText={value => this.handleChange('creditCard', value)}
                    value={creditCard}
                />
                <FlatList
                    data={this.context.cartItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.product.name} - {item.variation}</Text>
                        </View>
                    )}
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
    textInput: {
        borderBottomWidth: 1,
        marginBottom: 20,
        width: '80%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
    }
})


