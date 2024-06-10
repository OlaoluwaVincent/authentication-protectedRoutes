import { ReactNode, createContext, useContext } from 'react';
import { LoggedUser } from '../utils/typings';
import useAuth from '../utils/lib/useAuth';

const userContext = createContext<LoggedUser | undefined>(undefined);

function UserContextProvider({ children }: { children: ReactNode }) {
  const user = useAuth();
  if (!user) throw new Error('Invalid User');
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

export default UserContextProvider;

// Custom hook to consume this Context

export const useUser = () => {
  const user = useContext(userContext);
  if (!user)
    throw new Error('useUser must be used within a UserContextProvider');
  return user;
};
