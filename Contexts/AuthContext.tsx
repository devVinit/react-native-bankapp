import * as React from 'react';

const AuthContext = React.createContext(false);
const AuthContextUpdate = React.createContext(() => { });

interface AuthProviderProps {
  children: React.ReactNode;
}

export function useAuth(): [boolean, () => void] {
  return [React.useContext(AuthContext), React.useContext(AuthContextUpdate)];
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  return (
    <AuthContext.Provider value={isLoggedIn}>
      <AuthContextUpdate.Provider value={() => setLoggedIn(!isLoggedIn)}>
        {children}
      </AuthContextUpdate.Provider>
    </AuthContext.Provider>
  );
}