import SearchResults from './SearchResults';

export interface User {
  name: string;
  email: string;
  description: string;
  image: string;
}

export interface IUserContext {
  user: User;
  setUser: (newUser: User) => void;
  albums: SearchResults[] | null;
  setAlbums: (album: SearchResults[]) => void;
}
