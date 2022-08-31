import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Collection from '../../interfaces/Collection';

interface IProps {
  collection: Collection
}

function AlbumInfo({ collection }: IProps) {
  const {
    artworkUrl100, collectionName, artistName, primaryGenreName,
  } = collection;

  return (
    <Grid container direction="column">
      <Grid item>
        <img src={artworkUrl100} alt={`${collectionName} cover`} />
      </Grid>
      <Grid item>
        <Typography component="h3" variant="h5">{collectionName}</Typography>
        <Typography component="h4" variant="h6">{artistName}</Typography>
        <Typography component="h5" variant="subtitle1">{primaryGenreName}</Typography>
      </Grid>
    </Grid>
  );
}

export default AlbumInfo;
