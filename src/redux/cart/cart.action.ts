import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer.utils';
import { CART_ACTION_TYPES, Item } from './cart.constant';

export type ToggleCart = Action<CART_ACTION_TYPES.TOGGLE_CART>;
export type AddItemToCart = ActionWithPayload<
  CART_ACTION_TYPES.ADD_ITEM_TO_CART,
  Item
>;
export type RemoveItemFromCart = ActionWithPayload<
  CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
  Item
>;
export type DecreaseItemQuantity = ActionWithPayload<
  CART_ACTION_TYPES.DECREASE_ITEM_QUANTITY,
  Item
>;

export const toggleCart = withMatcher(
  (): ToggleCart => createAction(CART_ACTION_TYPES.TOGGLE_CART)
);

export const addItemToCart = withMatcher(
  (item: Item): AddItemToCart =>
    createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, item)
);

export const removeItemFromCart = withMatcher(
  (item: Item): RemoveItemFromCart =>
    createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, item)
);

export const decreaseItemQuantity = withMatcher(
  (item: Item): DecreaseItemQuantity =>
    createAction(CART_ACTION_TYPES.DECREASE_ITEM_QUANTITY, item)
);
