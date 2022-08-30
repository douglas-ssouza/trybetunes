import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
          albums?.length && (
            albums.map((album) => (
              <h2>{album.collectionName}</h2>
            ))
          )
        }
      </Grid>
    </Grid>
  );
}

export default Search;
