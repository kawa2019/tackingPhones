import { MapContainerStyled } from './PhonesMap.styles';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import { createPosition, getMarkerIcon } from '../../Services/PhonesMap';
import { FC, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/Context';
import { PhoneApi, TrackedPhonesApi } from '../../Services/Api/interfaces';
import { markersIconType } from './interfaces';
import { useQueryClient } from 'react-query';
import { Typography } from '@mui/material';

const PhonesMap: FC = () => {
  const queryClient = useQueryClient();
  const trackedPhonesCache = queryClient.getQueryData<TrackedPhonesApi>('getTrackedPhones');
  const { state } = useContext(AppContext);
  const { filteredPhones } = state;
  const [markersIcons, setMarkersIcon] = useState<markersIconType>({});

  useEffect(() => {
    if (trackedPhonesCache) {
      const newMarkersIcons: markersIconType = {};
      trackedPhonesCache.data.map(phone => {
        newMarkersIcons[phone.id] = getMarkerIcon(phone.last_status);
      });

      setMarkersIcon({ ...newMarkersIcons });
    }
  }, [trackedPhonesCache]);

  return (
    <MapContainerStyled center={[45, 52]} zoom={1} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredPhones.data.map((phone: PhoneApi) => (
        <Marker key={phone.id} position={createPosition(phone)} icon={markersIcons[phone.id]}>
          <Popup>
            <Typography variant={'body2'}>sim: {phone.sim_number}</Typography>
            <Typography variant={'body2'}>status: {phone.last_status}</Typography>
            <Typography variant={'body2'}>imei: {phone.imei}</Typography>
            <Typography variant={'body2'}>heartbeat: {phone.last_heartbeat}</Typography>
            <Typography variant={'body2'}>heartbeat: {phone.last_speed}</Typography>
          </Popup>
        </Marker>
      ))}
    </MapContainerStyled>
  );
};

export default PhonesMap;
