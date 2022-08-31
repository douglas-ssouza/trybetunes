import User from './User';
import SearchResults from './SearchResults';

interface IContext {
  user: User;
  setUser: (newUser: User) => void;
  albums: SearchResults[] | null;
  setAlbums: (album: SearchResults[]) => void;
}

export default IContext;
