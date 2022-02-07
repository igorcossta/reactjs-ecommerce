import { Profile } from '../../commom/user.type';

export interface Action {
  type: string;
  payload: {
    credentials: Profile;
  };
}

export interface UserState {
  currentUser: Profile | null;
}
