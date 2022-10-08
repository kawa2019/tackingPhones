import { LeafletContainer } from './PhonesMap.styles';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { FC, useCallback } from 'react';
import { useQuery } from 'react-query';
import { getTrackedPhones } from '../../Services/api';
import { Button, CircularProgress } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import { getMarkerIcon, MarkerIcon } from '../../Componentns/PhonesMap/MarkerIcon';

const fakeResponse = {
  request: 'devicelist',
  status: 'success',
  data: [
    {
      id: '1',
      sim_number: '2347123458700',
      imei: '112345863307200',
      last_longitude: '12.36703',
      last_latitude: '12.38062',
      last_altitude: '0',
      last_speed: '41.7',
      last_status: 'No Alarm',
      last_track_time: '2022-07-28 23:20:12',
      last_heartbeat: '1659046812',
    },
    {
      id: '4',
      sim_number: '2348045119891',
      imei: '153865853307200',
      last_longitude: '8.5537',
      last_latitude: '6.92729',
      last_altitude: '0',
      last_speed: '10.7',
      last_status: 'No Alarm',
      last_track_time: '2022-07-28 23:20:12',
      last_heartbeat: '1659046812',
    },
    {
      id: '164',
      sim_number: '2348091239233',
      imei: '865205035850860',
      last_longitude: '9.05654',
      last_latitude: '7.459463',
      last_altitude: '0',
      last_speed: '0',
      last_status: 'Device Offline',
      last_track_time: '2022-07-27 10:05:26',
      last_heartbeat: '1658912726',
    },
  ],
};

const PhonesMap: FC = () => {
  // const trackedPhones = useQuery<any, Error>('getCurrenciesApi', getTrackedPhones);
  // console.log(trackedPhones);
  //

  const createPosition = useCallback((phone: any) => {
    return { lat: phone.last_longitude, lng: phone.last_longitude };
  }, []);

  // if (trackedPhones.isLoading) {
  //   return <CircularProgress />;
  // }

  return (
    <>
      <LeafletContainer>
        <MapContainer center={[12.38062, 12.36703]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {fakeResponse.data.map((phone: any) => (
            <Marker position={createPosition(phone)} icon={getMarkerIcon()}>
              <Popup>{JSON.stringify(phone)}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </LeafletContainer>
      ;
    </>
  );
};

export default PhonesMap;
