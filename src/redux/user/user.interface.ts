export interface UserAction {
  type: string;
  payload: {
    user?: User;
  };
}

export interface UserReducerState {
  currentUser: User | undefined;
}

export interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
