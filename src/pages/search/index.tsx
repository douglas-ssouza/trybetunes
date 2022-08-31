import React, { useState, useContext } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { UserContext } from '../../context/UserContext';

import AlbumCard from './AlbumCard';

import searchAlbums from '../../api/searchAlbums';
import SearchForm from './SearchForm';

function Search() {
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);

  const { albums, setAlbums } = useContext(UserContext);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    const results = await searchAlbums(search);
    setAlbums(results);
    setLoading(false);
  };

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <Grid container direction="column" sx={{ mt: 4 }}>
        <SearchForm
          search={search}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        <Grid item container justifyContent="center" spacing={4} sx={{ mt: 2 }}>
          {
            albums && albums.length
              ? (
                albums.map((album) => (
                  <AlbumCard
                    key={album.collectionId}
                    artworkUrl100={album.artworkUrl100}
                    collectionName={album.collectionName}
                    collectionId={album.collectionId}
                    collectionPrice={album.collectionPrice}
                    artistId={album.artistId}
                    artistName={album.artistName}
                    releaseDate={album.releaseDate}
                    trackCount={album.trackCount}
                  />
                ))
              )
              : null
          }
          {
            albums && !albums.length
              ? (
                <Grid item>
                  <Typography component="h3" variant="h4">
                    Nenhum álbum encontrado
                  </Typography>
                </Grid>
              )
              : null
          }
        </Grid>
      </Grid>
    </Container>
  );
}

export default Search;
