import { LoggedUser } from '../typings';
import useSessionStorage from './useSessionStorage';

function useAuth(): LoggedUser | null {
  const user = useSessionStorage<LoggedUser | null>('user', null);

  if (user === undefined || user === null) {
    return null;
  }

  return user;
}

export default useAuth;
