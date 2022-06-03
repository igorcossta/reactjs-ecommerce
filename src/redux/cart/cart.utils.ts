import { Item } from './cart.constant';

export const addItem = (cartItems: Item[], cartItemToAdd: Item): Item[] => {
  // check if cart item already exists on cart list
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // if exist increase the quantity of the cart item
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // otherwise return the cart list with the new item
  return [...cartItems, cartItemToAdd];
};

export const decreaseItem = (
  cartItems: Item[],
  cartItemToDecrease: Item
): Item[] => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDecrease.id
  );

  // check if item quantity is equal to 1, if it is remove that item from cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToDecrease.id
    );
  }

  // return back the cart items with matching cart item reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const removeItem = (
  cartItems: Item[],
  cartItemToRemove: Item
): Item[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
