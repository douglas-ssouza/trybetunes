import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SearchResults from '../../interfaces/SearchResults';

function AlbumCard(props: SearchResults) {
  const { artworkUrl100, collectionName, artistName } = props;

  return (
    <Grid container>
      <Grid item>
        <Box>
          <img src={artworkUrl100} alt={`${collectionName} cover`} />
        </Box>
      </Grid>
      <Grid item>
        <Typography component="h4" variant="h5">{collectionName}</Typography>
        <Typography component="h5" variant="h6">{artistName}</Typography>
      </Grid>
    </Grid>
  );
}

export default AlbumCard;
