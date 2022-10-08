import { Box, styled } from '@mui/material';

export const LeafletContainer = styled(Box)(() => ({
  width: '100%',

  '.leaflet-container': {
    height: '500px',
    width: '500px',
    overflow: 'hidden',
    margin: '0 auto',
  },
}));