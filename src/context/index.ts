import { createContext, Dispatch } from 'react';

type User = {
  name: string,
  email: string,
  description: string,
  image: string,
}

interface ContextValue {
  user: User
  setUser: Dispatch<User>,
}

const Context = createContext({} as ContextValue);

export default Context;
