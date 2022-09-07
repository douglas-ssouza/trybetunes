import React, { useContext } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
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
  const {
    previewUrl, trackName, trackId, artworkUrl100, collectionName,
  } = track;

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
    <Card>
      <Grid
        container
        alignItems="center"
      >
        <Grid item>
          <CardMedia>
            <img src={artworkUrl100} alt={`${collectionName} cover`} />
          </CardMedia>
        </Grid>
        <Grid item>
          <CardContent>
            <Typography component="h5" variant="h6">
              {trackName}
            </Typography>
            <audio src={previewUrl} controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
          </CardContent>
        </Grid>
        <Grid item>
          <CardActions>
            <IconButton onClick={handleClick} sx={{ ml: 1 }} size="large">
              { isFavorite ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon color="primary" /> }
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AlbumTrack;
