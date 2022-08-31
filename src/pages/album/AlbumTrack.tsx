import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
        <audio data-testid="audio-component" src={previewUrl} controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
      </Grid>
    </Grid>
  );
}

export default AlbumTrack;
