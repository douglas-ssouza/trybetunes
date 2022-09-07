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

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h5" variant="h6">
          {trackName}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item xs={10}>
            <audio src={previewUrl} controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
          </Grid>
          <Grid item>
            <IconButton onClick={handleClick} sx={{ ml: 1 }} size="large">
              { isFavorite ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon color="primary" /> }
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AlbumTrack;
