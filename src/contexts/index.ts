import { createContext, useContext } from 'react';

interface Props {
  signed: boolean;
  user: User | undefined;
}

export interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string | null;
}

export const AuthStateContext = createContext<Props>({} as Props);

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
}
