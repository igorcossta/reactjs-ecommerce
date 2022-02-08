import { CartItem } from './cart.interface';

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, cartItemToAdd];
};

export const decreaseItemQuantity = (
  cartItems: CartItem[],
  cartItemToDecrease: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDecrease.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToDecrease.id
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
