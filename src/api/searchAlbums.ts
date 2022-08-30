import SearchResults from '../interfaces/SearchResults';

async function searchAlbums(artist: string): Promise<SearchResults[]> {
  const artistNameURL = encodeURI(artist).replaceAll('%20', '+');

  const endpoint = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  const response = await fetch(endpoint);
  const { results } = await response.json();

  return results.map((album: SearchResults) => ({
    artistId: album.artistId,
    artistName: album.artistName,
    collectionId: album.collectionId,
    collectionName: album.collectionName,
    collectionPrice: album.collectionPrice,
    artworkUrl100: album.artworkUrl100,
    releaseDate: album.releaseDate,
    trackCount: album.trackCount,
  }));
}

export default searchAlbums;
