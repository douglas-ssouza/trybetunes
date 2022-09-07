import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import SearchResults from '../../interfaces/SearchResults';

function AlbumCard(props: SearchResults) {
  const {
    artworkUrl100, collectionName, collectionId, artistName, collectionPrice,
  } = props;

  const album = collectionName.length <= 30
    ? collectionName : `${collectionName.slice(0, 25)}...`;

  const artist = artistName.length <= 30
    ? artistName : `${artistName.slice(0, 25)}...`;

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
      <Card elevation={6} sx={{ p: 3 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item alignSelf="center">
            <CardMedia>
              <img src={artworkUrl100} alt={`${collectionName} cover`} width="100px" />
            </CardMedia>
          </Grid>
          <Grid item>
            <CardContent>
              <Typography component="h4" variant="h6">{album}</Typography>
              <Typography component="h5" variant="subtitle1">{artist}</Typography>
              <Typography component="p" variant="body2">{collectionPrice}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default AlbumCard;
