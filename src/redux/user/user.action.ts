import { Profile } from '../../commom/user.type';
import { SET_CURRENT_USER } from './user.constant';

export const setCurrentUser = (props: Profile) => ({
  type: SET_CURRENT_USER,
  payload: {
    credentials: props,
  },
});
