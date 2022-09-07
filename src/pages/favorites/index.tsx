import React, { useContext } from 'react';

import Grid from '@mui/material/Grid';

import AudioTrack from '../album/AlbumTrack';

import { UserContext } from '../../context/UserContext';

function Favorites() {
  const { favorites } = useContext(UserContext);

  return (
    <Grid container spacing={2} sx={{ p: 4 }}>
      {
        favorites.map((track) => (
          <Grid item xs={12} md={6} lg={4}>
            <AudioTrack key={track.trackId} track={track} />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default Favorites;
