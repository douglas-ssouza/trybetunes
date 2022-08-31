import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface IProps {
  search: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClick: () => void
}

function SearchForm({ handleChange, search, handleClick }: IProps) {
  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item>
        <TextField onChange={handleChange} placeholder="Digite o artista ou banda" />
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

SearchForm.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchForm;
