import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

const AlbumPaper = styled(Paper)(({ theme }) => ({
  padding: 5,
  border: `1px solid ${theme.palette.primary.dark}`,
  [theme.breakpoints.down('md')]: {
    height: '15rem',
  },
}));

export default AlbumPaper;
