import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Track from '../../interfaces/Track';

interface IProps {
  track: Track;
}

function AlbumTrack({ track }: IProps) {
  const { previewUrl, trackName } = track;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h5" variant="h6">
          {trackName}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Grid item>
            <audio data-testid="audio-component" src={previewUrl} controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
          </Grid>
          <Grid item>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AlbumTrack;
