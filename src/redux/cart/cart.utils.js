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