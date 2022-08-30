import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import searchAlbums from '../../api/searchAlbums';

function Search() {
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    const albums = await searchAlbums(search);
    console.log(albums);
    setLoading(false);
  };

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4 }} spacing={4}>
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
  );
}

export default Search;
