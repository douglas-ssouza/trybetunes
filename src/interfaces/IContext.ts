import User from './User';
import SearchResults from './SearchResults';
import Track from './Track';

interface IContext {
  user: User;
  setUser: (newUser: User) => void;
  albums: SearchResults[] | null;
  setAlbums: (album: SearchResults[] | null) => void;
  favorites: Track[];
  setFavorites: (song: Track[]) => void;
}

export default IContext;
