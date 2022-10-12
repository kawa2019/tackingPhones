import { styled } from '@mui/material';
import { MapContainer } from 'react-leaflet';

export const MapContainerStyled = styled(MapContainer)(() => ({
  '&.leaflet-container': {
    height: '500px',
    width: '500px',
    overflow: 'hidden',
  },
}));
