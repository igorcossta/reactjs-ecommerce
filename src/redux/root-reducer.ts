import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import categoryReducer from './category/category.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  category: categoryReducer,
});
