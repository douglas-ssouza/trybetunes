import { Dispatch, SetStateAction } from 'react';

export interface IUser {
  name: string;
  email: string;
  description: string;
  image: string;
}

export type UserContextType = {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
};
