import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import AlbumInfo from './AlbumInfo';
import AlbumTrack from './AlbumTrack';

import getMusics from '../../api/getMusics';

import IAlbum from '../../interfaces/IAlbum';

function Album() {
  const [album, setAlbum] = useState<IAlbum>({ collection: null, songs: null });

  const { id } = useParams();

  useEffect(() => {
    const fetchSongs = async () => {
      if (id) {
        const [collection, ...songs] = await getMusics(id);
        setAlbum({ collection, songs });
      }
    };

    fetchSongs();
  }, []);

  if (!album.collection || !album.songs) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <AlbumInfo collection={album.collection} />
      </Grid>
      <Grid item xs={8}>
        {
          album.songs?.map((song) => (
            <AlbumTrack key={song.trackId} track={song} />
          ))
        }
      </Grid>
    </Grid>
  );
}

export default Album;
