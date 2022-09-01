import React, { useContext } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Track from '../../interfaces/Track';

import { UserContext } from '../../context/UserContext';

interface IProps {
  track: Track;
}

function AlbumTrack({ track }: IProps) {
  const { previewUrl, trackName, trackId } = track;

  const { favorites, setFavorites } = useContext(UserContext);

  const isFavorite = favorites.some((song: Track) => song.trackId === trackId);

  const handleClick = () => {
    const newFavorites = isFavorite
      ? favorites.filter((song) => song.trackId !== trackId)
      : [...favorites, track];

    setFavorites(newFavorites);
  };

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
            <audio src={previewUrl} controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
          </Grid>
          <Grid item>
            <IconButton onClick={handleClick}>
              { isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AlbumTrack;
