export const addItemToCart = (cartItems, cartItemToAdd) => {
    const cartItemExists = cartItems.some(item => item.id === cartItemToAdd.id);

    if (cartItemExists) {
        return cartItems.map(item =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                :
                item
        );
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    if (cartItemToRemove.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }

    return cartItems.map(item =>
        item.id === cartItemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            :
            item
    );

};