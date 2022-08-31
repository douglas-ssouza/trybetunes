import Collection from './Collection';
import Track from './Track';

interface IAlbum {
  collection: Collection | null;
  songs: Track[] | null;
}

export default IAlbum;
