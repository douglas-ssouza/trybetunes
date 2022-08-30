import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AlbumCard from './AlbumCard';

import searchAlbums from '../../api/searchAlbums';

import SearchResults from '../../interfaces/SearchResults';

function Search() {
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<null | SearchResults[]>(null);

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
    <Grid
      container
      direction="column"
      sx={{ mt: 4 }}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <TextField
            onChange={handleChange}
            placeholder="Digite o artista ou banda"
          />
        </Grid>
        <Grid item>
          <Button
            size="large"
            variant="contained"
            disabled={search.length < 2}
            onClick={handleClick}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
      <Grid>
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
              <Typography component="h3" variant="h6">
                Nenhum álbum encontrado
              </Typography>
            )
            : null
        }
      </Grid>
    </Grid>
  );
}

export default Search;
