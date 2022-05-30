export interface UserAction {
  type: string;
  payload: {
    user?: User;
    error?: string;
  };
}

export interface UserReducerState {
  currentUser: User | undefined;
  isLoading: boolean;
  error: string | undefined;
}

export interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
