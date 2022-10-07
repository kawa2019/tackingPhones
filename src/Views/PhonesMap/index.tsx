import { LeafletContainer } from './PhonesMap.styles';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { getTrackedPhones } from '../../Services/api';

const position = { lat: 51.505, lng: -0.09 };

const PhonesMap: FC = () => {

  const trackedPhones = useQuery<any, Error>('getCurrenciesApi', getTrackedPhones);

  console.log(trackedPhones);

  return (
    <LeafletContainer>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        id={'mapbox/satellite-v9'}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </LeafletContainer>
  );
};

export default PhonesMap;