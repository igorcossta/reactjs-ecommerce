import { SET_CURRENT_USER } from './user.constant';
import { User } from './user.interface';

export const setCurrentUser = (user: User | undefined) => ({
  type: SET_CURRENT_USER,
  payload: { user },
});
