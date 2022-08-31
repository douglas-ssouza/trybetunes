import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SearchResults from '../../interfaces/SearchResults';

function AlbumCard(props: SearchResults) {
  const {
    artworkUrl100, collectionName, collectionId, artistName, collectionPrice,
  } = props;

  const album = collectionName.length <= 30
    ? collectionName : `${collectionName.slice(0, 29)}...`;

  const artist = artistName.length <= 30
    ? artistName : `${artistName.slice(0, 29)}...`;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      xl={3}
      component={Link}
      to={`/album/${collectionId}`}
      sx={{ textDecoration: 'none' }}
    >
      <Paper
        elevation={6}
        sx={{ p: 3 }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item alignSelf="center">
            <Box>
              <img src={artworkUrl100} alt={`${collectionName} cover`} width="100px" />
            </Box>
          </Grid>
          <Grid item>
            <Typography component="h4" variant="h6">{album}</Typography>
            <Typography component="h5" variant="subtitle1">{artist}</Typography>
            <Typography component="p" variant="body2">{collectionPrice}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default AlbumCard;
