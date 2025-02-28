import { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DefaultProviderProps } from '@/types/context';

interface UserContextProps {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({ children }: DefaultProviderProps) {
  const navigate = useNavigate();

  // Initialize login state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => !!localStorage.getItem('authToken')
  );

  const login = useCallback(
    (token: string) => {
      localStorage.setItem('authToken', token);
      setIsLoggedIn(true);
      navigate('/'); // Centralized redirection
    },
    [navigate]
  );

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login'); // Centralized redirection
  }, [navigate]);

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};
