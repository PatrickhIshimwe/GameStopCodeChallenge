import React, {createContext, Component, ReactNode} from 'react'
import {Product} from "../pages/ProductListPage"

export type CartItem = {
    product: Product
    variation: string
}

export type CartContextProps = {
    cartItems: CartItem[]
    addProductToCart: (product: Product, variation: string) => void
    clearProductFromCart: () => void
}

const CartContext = createContext<CartContextProps>({
    cartItems: [],
    addProductToCart: ()=> {},
    clearProductFromCart: ()=> {},
})

class CartProvider extends Component<{ children: ReactNode }, {cartItems: CartItem[]}> {
    state = {
        cartItems: [],
    }

    addProductToCart = (product: Product, variation: string) => {
        this.setState(prevState => ({
            cartItems: [...prevState.cartItems, { product, variation}],
        }))
    }

    clearProductFromCart = ()=> {
        this.setState({cartItems: []})
    }

    render() {
        return (
            <CartContext.Provider
                value={{
                    cartItems: this.state.cartItems,
                    addProductToCart: this.addProductToCart,
                    clearProductFromCart: this.clearProductFromCart,
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export {CartContext, CartProvider}
